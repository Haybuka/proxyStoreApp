import React from 'react';
import { View, ScrollView, Text } from 'react-native';


import AccountHeader from '../components/Account/Header'
import AccountTabs from '../components/Account/AccountTabs';
import ScoreView from '../components/Account/ScoreView';
import ArrowRight from '../assets/icon/ArrowRight';

const accountInfo = [
  {
    name: "profile",
    icon: "profile",
    id: 1,
    path: "Profile"
  },
  {
    name: "Change password",
    icon: "lock",
    id: 2,
    path: "Password"
  }
]
const accountSupport = [
  {
    name: "Help & Support",
    icon: "help",
    id: 1,
    path: ""
  },
  {
    name: "About",
    icon: "about",
    id: 2,
    path: ""
  },
  {
    name: "Privacy policy",
    icon: "policy",
    id: 3,
    path: ""
  },
]


function AccountScreen(props) {
  return (
    <ScrollView showsVerticalScrollIndicator={false} className="flex-1">

      <View className="flex-1 bg-white relative">
        <AccountHeader />
        <ScoreView score={60} />

        {/* <Profile />
        <Padlock />
        <Help />
        <About />
        <Privacy />
        <Logout />
        <ArrowLeft />
        <Padlock2 />
        <Camera /> */}

        <View className="px-3">
          <AccountTabs
            title={'Account info'}
            options={accountInfo}
          />
          <AccountTabs
            title={'Support'}
            options={accountSupport}
          />

          <View className="flex-row">
            <Text className="text-[16px] flex-1">Log out</Text>
            <ArrowRight stroke='#FF2222' />
          </View>
        </View>


      </View>
    </ScrollView>
  );
}


export default AccountScreen;