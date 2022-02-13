import { extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    "dark-blue": '#4219B5',
    "red": '#FF2726',
    "yellow": '#FFC20E',
    "green": '#00AA9E',
    "light-blue": '#4CD1F6',
    "light-gray": '#F2F2F2',
    "black": '#242426'
  },
}

const theme = extendTheme({ colors })

export { theme }