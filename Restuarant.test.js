const {sequelize} = require("./db");
const {Restuarant, Menu, MenuItem} = require('./index');
// const {Menu} = require('./Menu');
// const {MenuItem} = require('./MenuItem');

describe('Restuarant database', () => {
    beforeAll(async () => {
        await sequelize.sync({force: true})
    })

    test('can create a Restuarant', async () => {
        const testRestuarant = await Restuarant.create({name: 'Yemsade'})
        expect(testRestuarant.name).toBe('Yemsade')
    })

    test('Restuarant has a location', async () => {
        const testRestuarant = await Restuarant.create({name: 'Shuri', location: 'Grand Prairie'})
        expect(testRestuarant.location).toBe('Grand Prairie')
    })

    test('Restuarant has a menu with a name', async () => {
        const testMenu = await Menu.create ({title: 'Breakfast menu'})
        expect(testMenu.title).toBe('Breakfast menu')
    })

    test('menuItem has a price', async () => {
        const testMenuItem = await MenuItem.create ({price: 23.50})
        expect(testMenuItem.price).toBe(23.50)
    })

    test('Restuarant can have many menus', async () => {
        const TasteAfic = await Restuarant.create({name: 'tasteAfic', location: 'Dallas'});
        
        const Breakfast = await Menu.create({title: 'breakfast'});
        const Lunch = await Menu.create({title: 'lunch'});
        const Dinner = await Menu.create({title: 'dinner'});
        const LateNight = await Menu.create({title: 'lateNight'});
      
        await TasteAfic.addMenu(Breakfast);
        await TasteAfic.addMenu(Lunch);
        await TasteAfic.addMenu(Dinner);
        await TasteAfic.addMenu(LateNight);

        const menus = await TasteAfic.getMenus();

        expect(menus.length).toBe(4)
    })
     test('menu has many menu items', async () => {
         const BreakfastMenu = await Menu.create({title: 'Breakfast'});

         const Akara = await MenuItem.create({price: 1.50});
         const Pap = await MenuItem.create({price: 2.50});
         const friedPlantain = await MenuItem.create({price: 3.50});
         const Beans = await MenuItem.create({price: 4.00});
         const yamAndSauce = await MenuItem.create({price: 4.50});

         await BreakfastMenu.addMenuItem(Akara);
         await BreakfastMenu.addMenuItem(Pap);
         await BreakfastMenu.addMenuItem(friedPlantain);
         await BreakfastMenu.addMenuItem(Beans);
         await BreakfastMenu.addMenuItem(yamAndSauce);

         const menuitems = await BreakfastMenu.getMenuItems()
         expect(menuitems.length).toBe(5)
     })
})