import express from 'express';

const app = express();

const port = process.env.PORT || 3001;

app.use(express.json())

let milkTeas = {
    1: {
        name: "Earl Grey Milk Tea",
        ingredients: ['black tea', 'milk', 'boba'],
    },
    2: {
        name: "Jasmine Milk Tea",
        ingredients: ['jasmin tea', 'milk', 'boba'],
    },
    3: {
        name: "Trio Milk Tea",
        ingredients: ['black tea', 'milk', 'boba', 'grass jelly', 'pudding'],
    },
    4: {
        name: "Oreo Garden Milk Tea",
        ingredients: ['earl gray tea', 'milk', 'oreo cookie crumbs'],
    },
    5: {
        name: "Oolong Milk Tea",
        ingredients: ['oolong tea', 'milk'],
    },
    6: {
        name: "Thai Milk Tea",
        ingredients: ['thai ice tea', 'condensed milk', 'cane sugar'],
    },
}

// app.get('/', (req,res) => {
//     const userIngredient = req.query.ingredient;
//     let matchingMilkTeas = [];

//     Object.keys(milkTeas).forEach((key,value) => {
//         if(req.query.ingredient == milkTeas[key].ingredient){
//             matchingMilkTeas.push(key)
//         }
//     })
//     res.send(matchingMilkTeas)
// })

app.get('/', (req,res) => {
    const userIngredient = req.query.ingredient;

    if (!userIngredient) {
        return res.status(400).send('Please provide an ingredient in the URL.');
    }

    let matchingMilkTeas = [];
    
    Object.keys(milkTeas).forEach((key) => {
        const teaIngredients = milkTeas[key].ingredients;

        if(Array.isArray(teaIngredients) && teaIngredients.includes(userIngredient)) {
            matchingMilkTeas.push({
                id: key,
                name: milkTeas[key].name,
                ingredients: teaIngredients,
            });
        }
    })
    res.send(matchingMilkTeas)
})


app.get('/milkTea/:milkTea', (req,res) => {
    const requestedMilkTeaName = req.params.milkTea;

    let matchingMilkTea = null;
    
    Object.keys(milkTeas).forEach((key) => {
        const currentMilkTea = milkTeas[key];
        if(currentMilkTea.name.toLowerCase() === requestedMilkTeaName.toLowerCase()) {
            matchingMilkTea = currentMilkTea;
        }
    })
    res.send(matchingMilkTea);
})

// let milkTeas = [
//     { name: 'Earl Grey Milk Tea', ingredient: ['black tea', 'milk', 'boba'] },
//     { name: 'Jasmine Milk Tea', ingredient: ['jasmin tea', 'milk', 'boba'] },
//     { name: 'Trio Milk Tea', ingredient: ['black rtea', 'milk', "boba", "grass jelly", "pudding"] },
//     { name: 'Oreo Garden Milk Tea', ingredient: ['earl gray tea', 'milk', 'oreo cookie crumbs'] },
//     { name: 'Oolong Milk Tea', ingredient: ['oolong tea', 'milk'] },
//     { name: 'Thai Milk Tea', ingredient: ['thai ice tea', 'condensed milk', 'cane sugar'] },
   
// ];


// app.get('/milkTeaByIngredient', (req, res) => {
//     const craving = req.query.ingredient;
//     let matches = [];

//     for (let milkTea of milkTeas) {
//         if (milkTea.ingredient.includes(craving.toLowerCase())) {
//             matches.push(milkTea);
//         }
//     }

//     if (matches.length === 0) {
//         return res.status(404).send('No Milk Tea found with that ingredient.');
//     }

//     res.send(matches);
// });

// // 根据颜色筛选水晶
// app.get('/crystalsByColor', (req, res) => {
//     const desiredColor = req.query.color;
//     let matches = [];

//     for (let crystal of crystals) {
//         if (crystal.color.toLowerCase() === desiredColor.toLowerCase()) {
//             matches.push(crystal);
//         }
//     }
    
//     if (matches.length === 0) {
//         return res.status(404).send('No crystals found with that color.');
//     }

//     res.send(matches);
// });


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});