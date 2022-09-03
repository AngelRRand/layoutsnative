import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    banner: {
      height: 250,
      flex: 1
    },
    titulo: {
      fontWeight: 'bold',
      fontSize: 24,
      marginVertical: 20
    },
    contenedor: {
      marginHorizontal: 10
    },
    ciudad: {
      width: 250,
      height: 300,
      marginRight: 10
    },
    mejores: {
      width: '100%',
      height: 200,
      marginVertical: 5
    },
    listado: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    },
    listadoItem: {
      flexBasis: '49%'
    }
  });

export default styles