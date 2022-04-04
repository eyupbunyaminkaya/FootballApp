import React from 'react'
import {View, Text,ScrollView } from 'react-native';
import Fixture from '../components/TeamPageFixture/Fixture';
import TeamPageHeader from '../components/TeamPageHeader/TeamPageHeader';
import TeamPageScoreBoard from '../components/TeamPageScoreBoard/TeamPageScoreBoard';
import TeamPageStatistic from '../components/TeamPageStatistic/TeamPageStatistic';
import Team from '../components/TeamPageTeam/Team';
import Stadium from '../components/TeamPageStadium/Stadium';

function MyTeamPage(){
    return(
        <ScrollView>
            <TeamPageHeader />
            <TeamPageScoreBoard />
            <Fixture />
            <TeamPageStatistic />
            <Team />
            <Stadium />
        </ScrollView>
    )
}

export default MyTeamPage;