import express from 'express';
import cors from 'cors';

const app = express();

const port = process.env.PORT || 3001;

app.use(express.json())
app.use(cors({
    origin: '*'
}))

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


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});