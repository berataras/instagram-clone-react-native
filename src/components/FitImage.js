import {Image, Dimensions} from "react-native";

export default function FitImage({src}) {

    const width = Dimensions.get('window').width;

    return (
        <Image
            source={{
                uri: src
            }}
            style={{height: 417, width: width}}
        />
    );
}

