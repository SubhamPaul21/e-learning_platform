const { Category } = require("../Models/categoryModel")

async function getAndUpdateCategoryArray() {
    const categories = await Category.find().select("name");

    let categoryArray = [];
    categories.map(category => category.name).forEach(category => {
        categoryArray.push(category)
    })
    console.log("Category List:", categoryArray);
    return categoryArray;
}

exports.getAndUpdateCategoryArray = getAndUpdateCategoryArray;