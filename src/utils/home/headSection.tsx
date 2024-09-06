import { View, TouchableOpacity, Text, Image } from "react-native";
import { SIZES, FONTS, COLORS, icons } from "../../constants";

export function renderHead(profile: { name: any; point: any; }) {
    return (
        <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: SIZES.padding, alignItems: 'center' }}>

            <View style={{ flex: 1 }}>
                <View style={{ marginRight: SIZES.padding }}>
                    <Text style={{ ...FONTS.h3, color: COLORS.white }}>Bom Dia!</Text>
                    <Text style={{ ...FONTS.h2, color: COLORS.white }}>{profile.name}</Text>
                </View>
            </View>

            {/* PONTOS */}
            <TouchableOpacity
                style={{
                    backgroundColor: COLORS.primary,
                    height: 40,
                    paddingLeft: 3,
                    paddingRight: SIZES.radius,
                    borderRadius: 20
                }}
                onPress={() => { console.log("Point") }}
            >
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: 30, height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 25, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <Image
                            source={icons.plus_icon}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20
                            }}
                        />
                    </View>

                    <Text style={{ marginLeft: SIZES.base, color: COLORS.white, ...FONTS.body3 }}>{profile.point} pontos</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}