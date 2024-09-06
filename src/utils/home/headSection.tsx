import { View, TouchableOpacity, Text, Image } from "react-native";
import { SIZES, FONTS, COLORS, icons } from "../../constants";

import AntDesign from '@expo/vector-icons/AntDesign';

export function renderHead(profile: { name: string; point: number; }) {

    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    height: 150,
                    opacity: 1, 
                    backgroundColor: COLORS.primary,
                    justifyContent: 'center',
                    paddingHorizontal: SIZES.padding,
                }}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ ...FONTS.h3, color: COLORS.white }}>Olá,</Text>
                        <Text style={{ ...FONTS.h2, color: COLORS.white }}>{profile.name}!</Text>
                    </View>

                    {/* PONTOS */}
                    <TouchableOpacity
                        style={{
                            backgroundColor: COLORS.secondary,
                            height: 40,
                            paddingLeft: 3,
                            paddingRight: SIZES.radius,
                            justifyContent: 'center',
                            borderRadius: 20,
                        }}
                        onPress={() => { console.log("Pontos") }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ width: 30, height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 25, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                            <AntDesign name="pluscircleo" size={20} color="orange" />
                            </View>
                            <Text style={{ marginLeft: SIZES.base, color: COLORS.white, ...FONTS.body3 }}>{profile.point}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}
