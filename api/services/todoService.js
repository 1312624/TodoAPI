import categoryModel from '../models/Category';
import itemModel from '../models/Item';

/* -- Category -- */
export function addCategory(item) {
    console.log(item);
    const newCategory = new categoryModel(item);
    return newCategory.save();
}

export function getAllCategory() {
    return categoryModel.find({}, '-__v').exec();
}
/* -- End Category -- */

/* -- Item -- */
export function addItem(item) {
    const newItem = new itemModel(item);
    return newItem.save();
}

export function getItemByCategoryID(categoryID) {
    return itemModel.find({ categoryID }).exec();
}
/* -- End Item -- */