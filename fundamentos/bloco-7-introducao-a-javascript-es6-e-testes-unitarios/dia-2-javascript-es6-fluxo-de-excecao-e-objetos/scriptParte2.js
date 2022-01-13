const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    const deliveryPerson = order.order.delivery.deliveryPerson;
    const name = order.name;
    const phone = order.phoneNumber;
    const street = order.address.street;
    const numberAp = order.address.number;
    const ap = order.address.apartment;

    console.log(`olá ${deliveryPerson}, entrega para: ${name}, Telefone: ${phone}, R.${street}, Nº: ${numberAp}, AP: ${ap}.`)
  
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.

    const name = order.name = 'Luiz Silva';
    const pizzas = Object.keys(order.order.pizza);
    const pizza1 = pizzas[0];
    const pizza2 = pizzas[1];
    const refri = order.order.drinks.coke.type;
    const value = order.payment.total = 50;

    console.log(`Olá ${name}, o total do seu pedido de ${pizza1}, ${pizza2} e ${refri} é R$${value}.`)
  
  }
  
  orderModifier(order);


