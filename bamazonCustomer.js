const inquirer = require('inquirer')
const mysql = require('mysql2')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'bamazon'
});




db.query('SELECT * FROM `products`', (err, data) => {
    if (err) {
        console.log(err)
    }
    for (let i = 0; i < data.length; i++) {
        console.log(`Item number: ${data[i].item_id}`)
        console.log(`Product Item: ${data[i].product_name}`)
        console.log(`Price: $ ${data[i].price}`)
    }

    inquirer.prompt([{
                type: 'list',
                name: 'item_number',
                message: 'Which item number would you like to buy',
                choices: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
            },
            {
                type: 'number',
                name: 'quantity',
                message: 'How many would you like to buy'
            }
        ])
        .then(({
            item_number,
            quantity
        }) => {
            switch (item_number) {
                case '1':
                    console.log(`You have chosen to buy an order of ${quantity} ${data[0].product_name}`)

                    if (quantity <= data[0].stock_quantity) {
                        console.log(`Congratulations your order has been placed`)
                        let remaining_inventory = data[0].stock_quantity - quantity
                        db.query(`UPDATE products SET stock_quantity = ${remaining_inventory} WHERE item_id = 1 `)

                    } else {
                        console.log(`Sorry we have insufficient quantity of that item we only have ${data[0].stock_quantity}`)
                    }
                    db.end()
                    break

                case '2':
                    console.log(`You have chosen to buy an order of ${quantity} ${data[1].product_name}s`)

                    if (quantity <= data[1].stock_quantity) {
                        console.log(`Congratulations your order has been placed`)
                        let remaining_inventory = data[1].stock_quantity - quantity
                        db.query(`UPDATE products SET stock_quantity = ${remaining_inventory} WHERE item_id = 2 `)

                    } else {
                        console.log(`Sorry we have insufficient quantity of that item we only have ${data[1].stock_quantity}`)
                    }
                    db.end()
                    break

                case '3':
                    console.log(`You have chosen to buy an order of ${quantity} ${data[2].product_name}s`)

                    if (quantity <= data[2].stock_quantity) {
                        console.log(`Congratulations your order has been placed`)
                        let remaining_inventory = data[2].stock_quantity - quantity
                        db.query(`UPDATE products SET stock_quantity = ${remaining_inventory} WHERE item_id = 3 `)

                    } else {
                        console.log(`Sorry we have insufficient quantity of that item we only have ${data[2].stock_quantity}`)
                    }
                    db.end()
                    break
                case '4':
                    console.log(`You have chosen to buy an order of ${quantity} ${data[3].product_name}`)
                    if (quantity <= data[3].stock_quantity) {
                        console.log(`Congratulations your order has been placed`)
                        let remaining_inventory = data[3].stock_quantity - quantity
                        db.query(`UPDATE products SET stock_quantity = ${remaining_inventory} WHERE item_id = 4 `)

                    } else {
                        console.log(`Sorry we have insufficient quantity of that item we only have ${data[3].stock_quantity}`)
                    }
                    db.end()
                    break
                case '5':
                    console.log(`You have chosen to buy an order of ${quantity} ${data[4].product_name}s`)
                    if (quantity <= data[4].stock_quantity) {
                        console.log(`Congratulations your order has been placed`)
                        let remaining_inventory = data[4].stock_quantity - quantity
                        db.query(`UPDATE products SET stock_quantity = ${remaining_inventory} WHERE item_id = 5 `)

                    } else {
                        console.log(`Sorry we have insufficient quantity of that item we only have ${data[4].stock_quantity}`)
                    }
                    db.end()
                    break
                case '6':
                    console.log(`You have chosen to buy an order of ${quantity} ${data[5].product_name}`)
                    if (quantity <= data[5].stock_quantity) {
                        console.log(`Congratulations your order has been placed`)
                        let remaining_inventory = data[5].stock_quantity - quantity
                        db.query(`UPDATE products SET stock_quantity = ${remaining_inventory} WHERE item_id = 6 `)

                    } else {
                        console.log(`Sorry we have insufficient quantity of that item we only have ${data[5].stock_quantity}`)
                    }
                    db.end()
                    break
                case '7':
                    console.log(`You have chosen to buy an order of ${quantity} ${data[6].product_name}`)
                    if (quantity <= data[6].stock_quantity) {
                        console.log(`Congratulations your order has been placed`)
                        let remaining_inventory = data[6].stock_quantity - quantity
                        db.query(`UPDATE products SET stock_quantity = ${remaining_inventory} WHERE item_id = 7 `)

                    } else {
                        console.log(`Sorry we have insufficient quantity of that item we only have ${data[6].stock_quantity}`)
                    }
                    db.end()
                    break
                case '8':
                    console.log(`You have chosen to buy an order of ${quantity} ${data[7].product_name}s`)
                    if (quantity <= data[7].stock_quantity) {
                        console.log(`Congratulations your order has been placed`)
                        let remaining_inventory = data[7].stock_quantity - quantity
                        db.query(`UPDATE products SET stock_quantity = ${remaining_inventory} WHERE item_id = 8 `)

                    } else {
                        console.log(`Sorry we have insufficient quantity of that item we only have ${data[7].stock_quantity}`)
                    }
                    db.end()
                    break
                case '9':
                    console.log(`You have chosen to buy an order of ${quantity} ${data[8].product_name}s`)
                    if (quantity <= data[8].stock_quantity) {
                        console.log(`Congratulations your order has been placed`)
                        let remaining_inventory = data[8].stock_quantity - quantity
                        db.query(`UPDATE products SET stock_quantity = ${remaining_inventory} WHERE item_id = 9 `)

                    } else {
                        console.log(`Sorry we have insufficient quantity of that item we only have ${data[8].stock_quantity}`)
                    }
                    db.end()
                    break
                case '1o':
                    console.log(`You have chosen to buy an order of ${quantity} ${data[9].product_name}`)
                    if (quantity <= data[9].stock_quantity) {
                        console.log(`Congratulations your order has been placed`)
                        let remaining_inventory = data[9].stock_quantity - quantity
                        db.query(`UPDATE products SET stock_quantity = ${remaining_inventory} WHERE item_id = 10 `)

                    } else {
                        console.log(`Sorry we have insufficient quantity of that item we only have ${data[9].stock_quantity}`)
                        db.end()
                    }

                    break

            }
        })

})