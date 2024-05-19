// userInfo.js

function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => ({
        originalName: name,
        modifiedName: modifiedNames[index],
        id: index + 1
    }));
}

// Example usage:
// const names = ['Alice', 'Bob', 'Charlie', 'David'];
// const modifiedNames = ['ALICE', 'bob', 'CHARLIE', 'david'];
// console.log(createUserProfiles(names, modifiedNames));

module.exports = { createUserProfiles };