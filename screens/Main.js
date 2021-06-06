import React,{Component} from 'react';
import { StyleSheet, Text, View,SafeAreaView,Platform,Image,TouchableOpacity,ScrollView } from 'react-native';

import {StatusBar} from 'expo-status-bar';
import * as FaceDetector from 'expo-face-detector';
import {Camera} from 'expo-camera';
import * as Permissions from 'expo-permissions';
import Filter1 from '../components/Filter1'
import Filter2 from '../components/Filter2'
import Filter3 from '../components/Filter3'
import Filter4 from '../components/Filter4'
import Filter5 from '../components/Filter5'
import Filter6 from '../components/Filter6'
import Filter7 from '../components/Filter7'
import Filter8 from '../components/Filter8'
import Filter9 from '../components/Filter9'
import Filter10 from '../components/Filter10'
import Filter11 from '../components/Filter11'
import Filter12 from '../components/Filter12'

let data = [
    {
        "id": "1",
        "image": require('../assets/crown-pic1.png')
    },
    {
        "id": "2",
        "image": require('../assets/crown-pic2.png')
    },
    {
        "id": "3",
        "image": require('../assets/crown-pic3.png')
    },
    {
        "id": "4",
        "image": require('../assets/flower-pic1.png')
    },
    {
        "id": "5",
        "image": require('../assets/flower-pic2.png')
    },
    {
        "id": "6",
        "image": require('../assets/flower-pic3.png')
    },
    {
        "id": "7",
        "image": require('../assets/hair-pic1.png')
    },
    {
        "id": "8",
        "image": require('../assets/hat-pic1.png')
    },
    {
        "id": "9",
        "image": require('../assets/hat-pic2.png')
    },
    {
        "id": "10",
        "image": require('../assets/other-pic1.png')
    },
    {
        "id": "11",
        "image": require('../assets/other-pic2.png')
    },
    {
        "id": "12",
        "image": require('../assets/other-pic3.png')
    }

]


export default class MainScreen extends React.Component{
constructor(props){
        super(props)
        this.state = {
            hasCameraPermissions : null,
            faces : []
        }
    }
    componentDidMount(){
        Permissions.askAsync(Permissions.CAMERA).then(this.onCameraPermission)
        }
        onCameraPermission = (status) =>{
            this.setState({
                hasCameraPermissions : status.status === "granted"
            })
        }
        onFacesDetected = (faces) => {
            this.setState({
                faces : faces
            })
        }
   
        onFaceDectectionError = (err) => {
            console.log(err)
        }
render(){
    const {hasCameraPermissions} = this.state;
    if(hasCameraPermissions == null){
        return <View/>
    }
    if(hasCameraPermissions == false){
        return(
            <View style = {styles.container}>
            <Text> You Have No Excess To The Camera</Text>
            </View>
        )
    }
return(
    <View style = {styles.middlecontainer}>
    <SafeAreaView style= {styles.droidSafeArea}/>
    <View style = {styles.upperContainer}>
    <Text style = {styles.titleText}>Look Me... </Text>
    </View>
    <View style = {styles.cameraStyle}>
    <Camera style = {{flex : 1}}type = {Camera.Constants.Type.front}
    faceDetectorSettings = {{
        mode : FaceDetector.Constants.Mode.fast,
        detectLandmarks : FaceDetector.Constants.Landmarks.all,
        runClassifications : FaceDetector.Constants.Classifications.all,
    }}
    onFacesDetected = {this.onFacesDetected}
    onFaceDetectionError = {this.onFaceDetectionError}
    />
  {
                        this.state.faces.map(face => {
                            if (this.state.current_filter === "filter_1") {
                                return <Filter1 key={face.faceID} face={face} />
                            } else if (this.state.current_filter === "filter_2") {
                                return <Filter2 key={face.faceID} face={face} />
                            } else if (this.state.current_filter === "filter_3") {
                                return <Filter3 key={face.faceID} face={face} />
                            } else if (this.state.current_filter === "filter_4") {
                                return <Filter4 key={face.faceID} face={face} />
                            } else if (this.state.current_filter === "filter_5") {
                                return <Filter5 key={face.faceID} face={face} />
                            } else if (this.state.current_filter === "filter_6") {
                                return <Filter6 key={face.faceID} face={face} />
                            } else if (this.state.current_filter === "filter_7") {
                                return <Filter7 key={face.faceID} face={face} />
                            } else if (this.state.current_filter === "filter_8") {
                                return <Filter8 key={face.faceID} face={face} />
                            } else if (this.state.current_filter === "filter_9") {
                                return <Filter9 key={face.faceID} face={face} />
                            } else if (this.state.current_filter === "filter_10") {
                                return <Filter10 key={face.faceID} face={face} />
                            }
                            else if (this.state.current_filter === "filter_11") {
                                return <Filter11 key={face.faceID} face={face} />
                            }
                            else if (this.state.current_filter === "filter_12") {
                                return <Filter12 key={face.faceID} face={face} />
                            }
                        })
                    }
    </View>
    <View style={styles.framesContainer}>
                    <ScrollView style={{ flexDirection: "row" }} horizontal showsHorizontalScrollIndicator={false}>
                        {
                            data.map(filter_data => {
                                return (
                                    <TouchableOpacity style={styles.filterImageContainer} onPress={() => this.setState({ current_filter: `filter_${filter_data.id}` })}>
                                        <Image source={filter_data.image} style={{ height: 32, width: 80 }} />
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </ScrollView>
                </View>
    <View style = {styles.actionContainer}>
    
    </View>
    </View>
)
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    headingContainer: {
        flex: 0.15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#6278e4"
    },
    titleText1: {
        fontSize: RFValue(30),
        fontWeight: "bold",
        color: "#efb141",
        fontStyle: 'italic',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -3, height: 3 },
        textShadowRadius: 1
    },
    titleText2: {
        fontSize: RFValue(30),
        fontWeight: "bold",
        color: "white",
        fontStyle: 'italic',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -3, height: 3 },
        textShadowRadius: 1
    },
    subheading1: {
        fontSize: RFValue(20),
        color: "#efb141",
        fontStyle: 'italic',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -3, height: 3 },
        textShadowRadius: 1
    },
    subheading2: {
        fontSize: RFValue(20),
        color: "white",
        fontStyle: 'italic',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -3, height: 3 },
        textShadowRadius: 1
    },
    cameraStyle: {
        flex: 0.65
    },
    framesContainer: {
        flex: 0.2,
        paddingLeft: RFValue(20),
        paddingRight: RFValue(20),
        paddingTop: RFValue(30),
        backgroundColor: "#6278e4"
    },
    filterImageContainer: {
        height: RFPercentage(8),
        width: RFPercentage(15),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e4e7f8",
        borderRadius: 30,
        marginRight: 20
    }
});