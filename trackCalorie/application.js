
const StrCtrl = (function(){

    return {
        getItems: function(){
            let items = [];
            if(JSON.parse(localStorage.getItem('items')) === null){
                items = [];
            } else {
                items = JSON.parse(localStorage.getItem('items'));
            }
            return items;
        },
        storeItems: function(item) {
            let items = StrCtrl.getItems();
            items.push(item);
            localStorage.setItem('items', JSON.stringify(items));
        }
    }
})(); 

const ItemCtrl = (function(){
    const item = function(id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    const data = {
        items: [],
        curItem: null,
        totalCal: 0
    }
    return {
        getItems: function() {
            return data.items;
        },
        logData: function() {
            return data;
        },
        addItem: function(name, cal) {
            let ID;
            if(data.items.length > 0){
                ID = data.items[data.items.length - 1].id + 1;
            } else {
                ID = 0;
            }
            cal =  parseInt(cal);

            newItem = new item(ID, name, cal);

            data.items.push(newItem);
            return newItem;
        },
        tCal: function() {
            let total = 0;
            data.items.forEach(function(item){
                total += parseInt(item.calories);
            });
            return total;
        },
        getItembyId: function(id) {
            let found;
            data.items.forEach(function(item){
                if(item.id === id){
                    found = item;
                }
            });
            return found;
        },
        setaccItem: function(accItem) {
            data.curItem = accItem;
        }, 
        getCurItem: function(){
            return data.curItem;
        },
        updatecurItem: function(name, cal){
            let found = null;
            data.items.forEach(function(item){
                if(item.id === data.curItem.id) {
                    item.name = name;
                    item.calories = cal;
                    found = item;
                }
            });
            return found;
        },
        deletecurItem: function() {
            data.items.forEach(function(item, i){
                if(item.id === data.curItem.id){
                    data.items.splice(i, 1);
                }
            });
        },
        clearAllItems: function() {
            data.items.forEach(function(item, i){
                data.items.splice(i, 1);
            })
            let items = StrCtrl.getItems();
            items.splice(0, items.length);
            console.log(items);
            localStorage.setItem('items', JSON.stringify(items));
        },
        fetchandSetItems: function() {
            let items = StrCtrl.getItems();
            items.forEach(function(item){
                data.items.push(item);
            });
            console.log(data.items);
        }
    }
})();

const UICtrl = (function(){

    const UIselectors = {
        itemsList: '.items',
        iMeal: '#iMeal',
        iCal: '#iCal',
        addBtn: '.add',
        updateBtn: '.update',
        deleteBtn: '.delete',
        backBtn: '.back',
        tCal: '#tCal',
        editli: '.editli',
        lis: '.list-group-item',
        clearAll: '#c-all'
    }


    return {
        pushItems: function(items) {
            let InitHtml = '';
            items.forEach(function(item){
                InitHtml += `
                <li id="item-${item.id}" class="list-group-item list-group-item-info font-italic">
                    <b>${item.name} = ${item.calories} Calories</b>
                    <span class="pull-right"><a href="#" class="badge badge-primary"><i class="editli fa fa-pencil"></i></a></span>
                </li>
                `; 
            });
            document.querySelector(UIselectors.itemsList).innerHTML = InitHtml;
        },

        getItemsData: function() {
            const Meal = document.querySelector(UIselectors.iMeal).value;
            const Cal = document.querySelector(UIselectors.iCal).value;

            if(Meal !== '' && Cal !== ''){
                return {
                    Meal,
                    Cal
                }
            } else {
                alert('RR Na Kr!!!');
            }
        },

        getSelectors: function() {
            return UIselectors;
        },

        addListItem: function(item) {
            const li = document.createElement('li');
            li.id = `item-${item.id}`;
            li.className = 'list-group-item list-group-item-info font-italic';
            li.innerHTML = `
            <b>${item.name} = ${item.calories} Calories</b>
            <span class="pull-right"><a href="#" class="badge badge-primary"><i class="editli fa fa-pencil"></i></a></span>
            `;

            document.querySelector(UIselectors.itemsList).insertAdjacentElement('beforeend', li);
        },
        clearInput: function() {
            document.querySelector(UIselectors.iMeal).value = '';
            document.querySelector(UIselectors.iCal).value = '';
        },
        addCaltoHead(total) {
            document.querySelector(UIselectors.tCal).textContent = total;
        },
        clearEditState: function() {
            UICtrl.clearInput();
            document.querySelector(UIselectors.updateBtn).parentElement.classList.add('d-none');
            document.querySelector(UIselectors.deleteBtn).parentElement.classList.add('d-none');
            document.querySelector(UIselectors.backBtn).parentElement.classList.add('d-none');
        },
        backBtnpressed: function() {
            UICtrl.clearInput();
            document.querySelector(UIselectors.updateBtn).parentElement.classList.add('d-none');
            document.querySelector(UIselectors.deleteBtn).parentElement.classList.add('d-none');
            document.querySelector(UIselectors.backBtn).parentElement.classList.add('d-none');    
            document.querySelector(UIselectors.addBtn).parentElement.classList.remove('d-none');
        },
        showEditMenu: function() {
            UICtrl.clearInput();
            document.querySelector(UIselectors.updateBtn).parentElement.classList.remove('d-none');
            document.querySelector(UIselectors.deleteBtn).parentElement.classList.remove('d-none');
            document.querySelector(UIselectors.backBtn).parentElement.classList.remove('d-none');
            document.querySelector(UIselectors.addBtn).parentElement.classList.add('d-none');
        },
        addItemtoForm: function() {
            document.querySelector(UIselectors.iMeal).value = ItemCtrl.getCurItem().name;
            document.querySelector(UIselectors.iCal).value = ItemCtrl.getCurItem().calories;
        },
        updateLists: function(updateditem) {
            let items = StrCtrl.getItems();
            let listItems = document.querySelectorAll(UIselectors.lis);

            listItems = Array.from(listItems);
            
            for(let i = 0; i<listItems.length; i++){
                let itemid = listItems[i].getAttribute('id');

                if(itemid === `item-${updateditem.id}`){
                    document.querySelector(`#${itemid}`).innerHTML = `
                    <b>${updateditem.name} = ${updateditem.calories} Calories</b>
                    <span class="pull-right"><a href="#" class="badge badge-primary"><i class="editli fa fa-pencil"></i></a></span>
                    `;
                }
            }
            items.forEach(function(lItem){
                if(updateditem.id === lItem.id){
                    lItem.name = updateditem.name;
                    lItem.calories = updateditem.calories;
                }
            });

            localStorage.setItem('items', JSON.stringify(items));

        },
        clearLists: function() {
            document.querySelector(UIselectors.itemsList).innerHTML = '';
        },
        deleteItemfromList: function(todel){
            let items = StrCtrl.getItems();
            let listItems = document.querySelectorAll(UIselectors.lis);

            listItems = Array.from(listItems);

            listItems.forEach(function(item){
                let itemid = item.getAttribute('id');

                if(itemid === `item-${todel.id}`){
                    document.querySelector(`#${itemid}`).remove();
                }
            });
            items.forEach(function(lItem, i){
                if(todel.id === lItem.id){
                    items.splice(i, 1);
                }
            });
            localStorage.setItem('items', JSON.stringify(items));
        }

    }

    
})();

const MainApp = (function(ItemCtrl, UICtrl, StrCtrl){

    const loadEventListeners = function() {
        const selectors = UICtrl.getSelectors();

        document.querySelector(selectors.addBtn).addEventListener('click', itemAdd);
    
        document.addEventListener('keypress', function(e){
            if(e.keyCode === 13 || e.which === 13){
                e.preventDefault();
                return false;
            }
        });

        document.querySelector(selectors.itemsList).addEventListener('click', editItemBtn);
    
        document.querySelector(selectors.updateBtn).addEventListener('click', updateList);
    
        document.querySelector(selectors.deleteBtn).addEventListener('click', deleteItem);
    
        document.querySelector(selectors.backBtn).addEventListener('click', backBtnSubmit);
    
        document.querySelector(selectors.clearAll).addEventListener('click', clearAll);
    }

    const backBtnSubmit = function(e){
        UICtrl.backBtnpressed();

        e.preventDefault();
    }
    const clearAll = function(e) {
        UICtrl.clearLists();
        ItemCtrl.clearAllItems();
        UICtrl.addCaltoHead(0); 

        e.preventDefault();
    }
    const deleteItem = function(e) {
        ItemCtrl.deletecurItem();

        UICtrl.deleteItemfromList(ItemCtrl.getCurItem());
    
        const totalCal = ItemCtrl.tCal();
        UICtrl.addCaltoHead(totalCal);

        UICtrl.backBtnpressed();

        e.preventDefault();
    }

    const updateList = function(e) {
        const input = UICtrl.getItemsData();
        
        const updatedItem = ItemCtrl.updatecurItem(input.Meal, input.Cal);

        UICtrl.updateLists(updatedItem);

        const totalCal = ItemCtrl.tCal();
        UICtrl.addCaltoHead(totalCal);
        

        e.preventDefault();
    }

    const itemAdd = function(e) {
        const input = UICtrl.getItemsData();

        const newItem = ItemCtrl.addItem(input.Meal,input.Cal);

        UICtrl.addListItem(newItem);
        
        const totalCal = ItemCtrl.tCal();
        UICtrl.addCaltoHead(totalCal);

        StrCtrl.storeItems(newItem);

        UICtrl.clearInput();

        e.preventDefault();
    }

    const editItemBtn = function(e) {
        if(e.target.classList.contains('editli')){
            UICtrl.showEditMenu();

            const listId = e.target.parentNode.parentNode.parentNode.id;

            const listIdArr = listId.split('-');

            const id = parseInt(listIdArr[1]);

            const accItem = ItemCtrl.getItembyId(id);

            ItemCtrl.setaccItem(accItem);

            UICtrl.addItemtoForm();
        }


        e.preventDefault();
    }   

    return {
        init: function() {
            UICtrl.clearEditState();

            ItemCtrl.fetchandSetItems();

            const appItems = ItemCtrl.getItems();

            UICtrl.pushItems(appItems);
        
            const totalCal = ItemCtrl.tCal();
            UICtrl.addCaltoHead(totalCal);


            loadEventListeners();
        }
    }
    
})(ItemCtrl, UICtrl, StrCtrl);


MainApp.init();