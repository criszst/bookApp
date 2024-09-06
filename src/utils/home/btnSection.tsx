import { View, TouchableOpacity, Text, Image } from "react-native";
import { SIZES, FONTS, COLORS, icons } from "../../constants";

const LineDivider = () => {
    return (
        <View style={{ width: 1, paddingVertical: 18}}>
            <View style={{ flex: 1, borderLeftColor: COLORS.lightGray, borderLeftWidth: 1}}></View>
        </View>
    )
}

export function renderButtonSection() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', padding: SIZES.padding }}>
            <View style={{ flexDirection: 'row', height: 70, backgroundColor: COLORS.secondary, borderRadius: SIZES.radius }}>
                {/* RESGATE */}
                <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => console.log("Resgate")}
                >
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            source={icons.claim_icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                        <Text style={{ marginLeft: SIZES.base, ...FONTS.body3, color: COLORS.white }}>Resgate</Text>
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
                        <Image
                            source={icons.point_icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                        <Text style={{ marginLeft: SIZES.base, ...FONTS.body3, color: COLORS.white }}>Pontos</Text>
                    </View>
                </TouchableOpacity>

                {/* divisor */}
                <LineDivider />

                {/* CARRINHO */}
                <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => console.log("Meu Carrinho")}
                >
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Image
                            source={icons.card_icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                        <Text style={{ marginLeft: SIZES.base, ...FONTS.body3, color: COLORS.white }}>Carrinho</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}