import { StyleSheet } from 'react-native'


const colors = {
    Yellow: "#FFC700",
    Gray: "#525252",
    mediumGray: "#6C6C6C",
    lightGray: "#E1E1E1",
    White: "#FFFFFF",
    Black: "#000000",
};

export const font = {
    regular: "OpenSans_400Regular",
    bold: "OpenSans_700Bold",

}

const theme = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.Gray,
        width: "100%",
        height: "100%",
    },

    filtercontainer:{
        marginTop: 20,
        marginBottom: 10,
        width: 380,
        height: 70,
        borderRadius: 4,
        backgroundColor: colors.mediumGray,
        justifyContent: "center",
        alignItems: "center",
    },
    
    })

const logincontainer = StyleSheet.create({
    card: {
        padding: 20,
        width: "93%",
        height: "90%",
        alignItems: "center",
        
        borderRadius: 4,
        backgroundColor: colors.mediumGray,
        
      },
    
        title: {
            fontSize: 36,
            lineHeight: 49,
            textAlign: "center",
            letterSpacing: -0.24,
            color: colors.White,
            marginBottom: 20,
            marginTop: 60,
            fontWeight: "normal",
            textTransform: "uppercase",
            fontFamily: font.regular,
        },

        form: {
            marginVertical: 10,
            

        },

        password: {
            flexDirection: "row",
            marginVertical: 25,
        },

        textinput: {
            padding: 10,
            width: 290,
            height: 47,
            borderRadius: 4,
            borderWidth: 1,
            borderColor: colors.lightGray,
            backgroundColor: colors.White,
        },

        toggle: {
            margin: -40,
            alignItems: "center",
            justifyContent: "center",
        },

        eyes: {
            width: 28,
            height: 28,
        },

        button: {
            width: 270,
            height: 50,
            backgroundColor: colors.Yellow,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 4,
            marginTop: 60,
        },

        textbutton: {
            fontWeight: "bold",
            fontSize: 20,
            lineHeight: 27,      
            letterSpacing: -0.24,
            color: colors.Black,
            textTransform: "uppercase",
            fontFamily: font.bold,

        },
        activityindicator: {
            marginTop: 20,
        }
       
    })         
      
const navbar = StyleSheet.create({
        container: {
            backgroundColor: colors.Yellow,
            height: 108,
            flexDirection: 'row',
            justifyContent: 'space-between'
            
        },
        textcontainer: {
            paddingLeft: 18,
            paddingTop: 45,
          
        },
        
        buttoncontainer: {
          paddingRight: 19,
          paddingTop: 45,
        },
      
        
        text: {
            fontSize: 24,
            lineHeight: 33,
            letterSpacing: -0.24,
            color: '#000',
            fontFamily: font.bold,
        },
      
        button: {
            backgroundColor: colors.Yellow,
            flexDirection: 'row',
            borderRadius: 10,
            borderColor: 'black',
            borderWidth: 1,
            height: 30,
            width: 100,
            justifyContent: 'center',
            alignItems: 'center',
        },
        textbutton: {
            fontSize: 14,
            lineHeight: 19,
            letterSpacing: -0.24,
            fontFamily: font.bold,
        }
            

})

const moviecardcontainer = StyleSheet.create({   
    card: {
        width: 380,
        height: 380,
        backgroundColor: colors.mediumGray,
        borderRadius: 4,
        marginVertical: 10,
    },

    imagecontainer: {
        paddingTop: 30,
    },
    
    Image: {
        width: 380,
        height: 200,
    },

    textcontainer: {
        paddingTop: 12,
        paddingLeft: 16,
    },
    
    title: {
        fontSize: 20,
        lineHeight: 27,
        letterSpacing: -0.24,
        color: "#FFFFFF",
        fontFamily: font.bold,
    },

    year: {
        fontSize: 16,
        lineHeight: 22,
        letterSpacing: -0.24,
        color: "#FFC700",
        fontFamily: font.bold,
    },

    subtitle: {
        fontSize: 14,
        lineHeight: 19,
        letterSpacing: -0.24,
        color: "#FFFFFF",
        fontFamily: font.regular,
    },
    
})

const moviefilter = StyleSheet.create({
    card: {
       width:340,
       height: 60,
       backgroundColor: colors.mediumGray,
       alignItems: "center",
       justifyContent: "center",
       borderWidth: 1,
       borderColor: colors.White,
       borderRadius: 4, 
    },

    picker: {
        width:320,
        color: colors.White,
        
    },
    
    pickeritens: {
        backgroundColor: colors.mediumGray,
        color: colors.White,
        
    },

})

export { colors, theme, navbar, logincontainer, moviecardcontainer, moviefilter};