const getButter = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Butter');
        }, 2000);
    });
};

const getColdDrinks = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Cold Drinks');
        }, 1000);
    });
};

const husbandGetsGroceryPromises = async () => {
    try {
        const butter = await getButter();
        console.log('Husband got', butter);
        
        const coldDrinks = await getColdDrinks();
        console.log('Husband also got', coldDrinks);
    } catch (error) {
        console.log('Error:', error);
    }
};

husbandGetsGroceryPromises();


