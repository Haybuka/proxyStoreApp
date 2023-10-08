import React from 'react';
import { View, ScrollView } from 'react-native';


import AccountHeader from '../components/Account/Header'
import AccountTabs from '../components/Account/AccountTabs';
import ScoreView from '../components/Account/ScoreView';

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
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1 px-4 mb-6">

        <AccountTabs
          title={'Account info'}
          options={accountInfo}
        />
        <AccountTabs
          title={'Support'}
          options={accountSupport}
        />


      </ScrollView>
    </View>
  );
}


export default AccountScreen;