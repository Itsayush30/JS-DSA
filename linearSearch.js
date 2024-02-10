function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i; // Return the index of the target element if found
        }
    }
    return -1; // Return -1 if the target element is not found in the array
}

// Example usage:
const array = [10, 20, 30, 40, 50];
const target = 30;
const index = linearSearch(array, target);
if (index !== -1) {
    console.log(`Element ${target} found at index ${index}.`);
} else {
    console.log(`Element ${target} not found in the array.`);
}
