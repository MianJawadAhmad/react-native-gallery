
import React from 'react';
import {
  View,
  TouchableOpacity,Image,FlatList,Text
} from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
 




class OverlayImgView extends React.PureComponent {
  constructor (props){
    super(props)
    this.state = {
      zIndex : -1,
      zIndex1:0,
    }
  }

  renderOrderItem=()=>{
    console.log()
    return (
      <View style={{flex:1,backgroundColor:this.props.mainViewBackgroundColor,alignItems:'center'}}>
      <FlatList
                data={this.props.renderData
                }
                renderItem={({ item }) => (

        <TouchableOpacity  style={{ height:  hp(this.props.mainImgHeight),width: wp(this.props.mainImgWidth),margin:2,
              backgroundColor:'white', alignSelf:'center', justifyContent:'center', alignContent:'center', borderRadius:hp('1%')}}
             onPress={()=>this.overlayView(item)}>


        <Image source={item.image} style={{height: hp(this.props.mainImgHeight),width: wp(this.props.mainImgWidth)
           ,justifyContent:'center',alignItems:'center', borderRadius:hp('1%')}}
              >
        </Image>
        
        </TouchableOpacity>
        
                            )}
                            //Setting the number of column
                            numColumns={this.props.columns}
                            keyExtractor={(item, index) => index.toString()}
                          />
      </View>
    )
  }

  render(){
  return (

            <View style={{flex:1,marginTop:50}}>
              {this.renderOrderItem()}
              <View style={{flex:1,backgroundColor:this.props.openViewBackgroundColor
            , zIndex : this.state.zIndex,position : 'absolute', 
            bottom : 0, left : 0, width : '100%',height:'100%'}}>
              <TouchableOpacity onPress={()=>this.setState({zIndex:-1})} style={{ height: hp('5%'),width: wp('20%'),margin:2,
              backgroundColor:'white',alignSelf:'flex-end', justifyContent:'center', alignContent:'center', borderRadius:hp('1%')}}>
                <Text style={{alignSelf:'center'}}>Cancel</Text>
              </TouchableOpacity>
              <Image style={{height: hp(this.props.openImgHeight),width: wp(this.props.openImgWidth)}} resizeMode='contain' source={this.state.selectImg} />
            </View>
            </View>
            
  );
}

overlayView = (item) =>{
 this.setState({zIndex:1, selectImg:item.image})
}

};



export default OverlayImgView;
