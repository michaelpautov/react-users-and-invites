// solution from Chat GPT, I don't think that is quite hard task, I can send u my leetcode if u would like to see my knowledge

function get(object, path, defaultValue) {
  const keys = path.split('.')
  let value = object

  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key]
    } else {
      return defaultValue !== undefined ? defaultValue : undefined
    }
  }

  return value !== undefined ? value : defaultValue
}

const obj = {
  a: {
    b: {
      c: 'd',
    },
    e: 'f',
  },
}

console.log(get(obj, 'a.b')) // { c : 'd' }
console.log(get(obj, 'a.b.c')) // 'd'
console.log(get(obj, 'a.e')) // 'f'
console.log(get(obj, 'x.x.e')) // undefined
console.log(get(obj, 'a.x.e', true)) // true
console.log(get(obj, 'a.x.e', 'My default value')) // My default value
