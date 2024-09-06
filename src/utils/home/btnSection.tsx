import { View, TouchableOpacity } from "react-native";
import { SIZES, COLORS } from "../../constants";
import AntDesign from '@expo/vector-icons/AntDesign';

const LineDivider = () => {
    return (
        <View style={{ width: 1, paddingVertical: 18}}>
            <View style={{ flex: 1, borderLeftColor: COLORS.lightGray, borderLeftWidth: 1}}></View>
        </View>
    )
}

export function renderButtonSection() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
            <View style={{ flexDirection: 'row', height: 50, backgroundColor: COLORS.secondary, borderRadius: SIZES.radius }}>
                {/* RESGATE */}
                <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => console.log("Resgate")}
                >
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                        <AntDesign name="gift" size={24} color="orange" />
                    </View>
                </TouchableOpacity>

                {/* divisor */}
                <LineDivider />

                {/* GANHE PONTOS */}
                <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => console.log("Ganhe Pontos")}
                >
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <AntDesign name="pluscircleo" size={20} color="orange" />
                    </View>
                </TouchableOpacity>

                {/* divisor */}
                <LineDivider />

                {/* BLIBLIOTECA */}
                <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => console.log("Biblioteca")}
                >
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <AntDesign name="appstore-o" size={24} color="orange" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}