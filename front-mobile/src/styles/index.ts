import { StyleSheet } from 'react-native'


const colors = {
    Yellow: "#FFC700",
    Gray: "#525252",
    mediumGray: "#6C6C6C",
    lightGray: "#E1E1E1",
    White: "#FFFFFF",
    Black: "#000000",
    Blue: "#407BFF",
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
        width: "92%",
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
        width: "100%",
        paddingVertical: 25,
        backgroundColor: colors.mediumGray,
        borderRadius: 4,
        marginVertical: 10,
    },

    imagecontainer: {
        width: "100%",
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

const moviecarddescription = StyleSheet.create({
    card: {
        marginTop: 20,
        marginHorizontal: 20,
        padding: 20,
        width: "92%",
       
        backgroundColor: colors.mediumGray,
        borderRadius: 10,
   
    },    
    
    imagecontainer: {
       alignItems: "center",
       padding: 20,
       
    },

    textcontainer: {
        marginBottom: 16,
        alignItems: "flex-start"
        
    },

    image : {
        width: 340,
        height: 175,

    },

    synopsis: {
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: colors.White,
        borderRadius: 10,
        
        
    
    },

    synopsistext: {
        fontSize: 16,
        lineHeight: 22,
        letterSpacing: -0.24,
        color: "#9E9E9E",
        fontFamily: font.regular,
        textAlign:"justify",
        marginHorizontal: 8,
        marginVertical: 10,
       
    },
    
})

const moviefilter = StyleSheet.create({
    card: {
       width: "92%",
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

const pagination = StyleSheet.create({
    container: {

    }
})

const formreview = StyleSheet.create({
    card: {
       width: "92%",
       height: 160,
       backgroundColor: colors.mediumGray,
       alignItems: "center",
       borderRadius: 4,
       marginTop: 25, 
    },

    textinput: {
        padding: 10,
        width: 360,
        height: 50,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: colors.lightGray,
        backgroundColor: colors.White,
        marginTop: 20,
        
    },

    button: {
        width: 360,
        height: 50,
        backgroundColor: colors.Yellow,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        marginTop: 17,
    },

    textbutton: {
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 22,      
        letterSpacing: -0.24,
        color: colors.Black,
        textTransform: "uppercase",
        fontFamily: font.bold,
    },
})
    const cardreview = StyleSheet.create({
        card:{
            width: "92%",
            backgroundColor: colors.mediumGray,
            borderRadius: 4,
            marginTop: 25,
            marginBottom: 25, 
            paddingHorizontal: 10,
            paddingVertical: 20, 
        },

        name:{
            flexDirection: "row",
            marginLeft: 5,
            alignItems: "center",
        },

        textname: {
            color: colors.White,
            fontFamily: font.bold,
            fontSize: 16,
            lineHeight: 22,
            letterSpacing: -0.24,
            marginLeft: 16,
        },

        reviewcontainer: {
            backgroundColor: colors.mediumGray,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: colors.White,
            borderRadius: 4,
            marginTop: 10, 
        },

        textreview: {
            fontSize: 16,
            lineHeight: 22,
            letterSpacing: -0.24,
            color: "#9E9E9E",
            fontFamily: font.regular,
            textAlign:"justify",
            marginHorizontal: 8,
            marginVertical: 10,

        }
})
    
    const buttonback = StyleSheet.create ({
        container: {
            
            flexDirection: "row",
            
        },

        button: {
            flexDirection: "row",
            alignItems: "center",
        },

        image: {
            color: colors.Blue,
            width: 15,
            height: 15,
            
        },

        text: {
            color: colors.White,
           

        }
})



export { colors, theme, navbar, 
        logincontainer, moviecardcontainer, 
        moviefilter, pagination, 
        moviecarddescription, formreview, 
        cardreview, buttonback};