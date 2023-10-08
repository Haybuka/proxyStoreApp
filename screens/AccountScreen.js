import React from 'react';
import { View, StyleSheet, Text, SectionList, ScrollView } from 'react-native';
import Screen from '../components/Screen';
import AccountHeader from '../components/Account/Header'
import CreditScore from '../assets/icon/account/CreditScore';
import ArrowRight from '../assets/icon/ArrowRight';
import AccountTabs from '../components/Account/AccountTabs';
import ScoreView from '../components/Account/ScoreView';

const accountInfo = [
  {
    name: "profile",
    icon: "profile",
    id: 1
  },
  {
    name: "Change password",
    icon: "lock",
    id: 2
  }
]
const accountSupport = [
  {
    name: "Help & Support",
    icon: "help",
    id: 1
  },
  {
    name: "About",
    icon: "about",
    id: 2
  },
  {
    name: "Privacy policy",
    icon: "policy",
    id: 3
  },
]


function AccountScreen(props) {
  return (
    <View className="flex-1 bg-white relative">
      <AccountHeader />
      <ScoreView score={60} />

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

const styles = StyleSheet.create({
  container: {}
});

export default AccountScreen;