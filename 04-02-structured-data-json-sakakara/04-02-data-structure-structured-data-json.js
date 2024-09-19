// structuredDataJSON.js

// Function 1
function parseJSON(json) {
  // Your code here
return JSON.parse(json);
}

// Function 2
function stringifyJSON(obj) {
  return JSON.stringify(obj);
  // Your code here

}

// Function 3
function getValueFromJSON(obj, key) {
  return obj[key];
  // Your code here

}

// Function 4
function updateValueInJSON(obj, key, value) {
  obj[key] = value;
  return obj;
  // Your code here

}

// Function 5
function removeKeyFromJSON(obj, key) {
  delete obj[key];
  return obj;
  // Your code here

}

// Function 6
function filterByAttribute(JSON, attr) {
const result = JSON.people.filter(person => person.hasOwnProperty(attr));
return {people : result};

}

// Function 7

function sortByAttribute(JSON, attr) {
  const result = [...JSON.people].sort((a, b) => a.age - b.age ) ;
   return {people : result};
}

// Function 8
function countAttributes(JSON) {
  // Your code here
  
  return Object.keys(JSON).length;
}

// Function 9
function findNestedValue(JSON, path) {
  const parts = path.split('.').flatMap(part => part.split(/[\[\]]/).filter(Boolean));
  return parts.reduce((acc, key) => acc && acc[key], JSON);

}

// Function 10
function flattenJSON(data, prefix = '') {
  // Start with an empty object to store the flattened data
  const flattened = {};

  // Loop through each key in the data object
  for (const key of Object.keys(data)) {
      // Get the value associated with the current key
      const value = data[key];

      // If the value is an array, then we need to loop through it
      if (Array.isArray(value)) {
          // Loop through each item in the array
          value.forEach((item, i) => {
              // Create a nested prefix string to be used when flattening the nested object
              // The format is "prefix.key[i]" where "i" is the index of the item
              const nestedPrefix = `${prefix ? `${prefix}.` : ''}${key}[${i}]`;

              // Recursively call flattenJSON on the nested object
              // The results will be merged into the "flattened" object
              Object.assign(flattened, flattenJSON(item, nestedPrefix));
          });
      } else {
          // If the value is not an array, then we can simply add it to the flattened object
          // The key is the same as the original, but with the prefix added
          flattened[prefix ? `${prefix}.${key}` : key] = value;
      }
  }

  // Return the flattened object
  return flattened;
}



module.exports = {
  parseJSON,
  stringifyJSON,
  getValueFromJSON,
  updateValueInJSON,
  removeKeyFromJSON,
  filterByAttribute,
  sortByAttribute,
  countAttributes,
  findNestedValue,
  flattenJSON,
};