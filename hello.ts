type Headers = { [key in string]: key extends 'set-cookie' ? string[] : key }

const headers: Headers = {
  'set-cookie': ['cookie'],
  'aaa': '111'
}
