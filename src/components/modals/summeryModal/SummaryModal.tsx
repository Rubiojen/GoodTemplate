import React from 'react';
import {StyleSheet, Text, TextStyle, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  useGameDuration,
  useGameSummary,
  useGameTaskLimit,
  useGameMathOperations,
} from 'utils/atoms/gameAtoms';
import {Consts} from 'utils/consts';
import {COLORS} from 'utils/enums';
import {GS} from 'utils/globalStyles';
import {formatSummary, millisToSeconds} from 'utils/logic';
import {normalizeHeight, normalizeWidth} from 'utils/sizes';
import {ModalWrap} from '../ModalWrapper';
import {NewRecord} from './screenParts/newRecord';

export const SummaryModal = () => {
  useSaveBestScore();

  return (
    <ModalWrap style={styles.summaryModal} shouldCloseOnPressOut>
      <ScrollView
        horizontal={false}
        contentContainerStyle={[styles.scrollView, GS.alignCenter]}>
        <SummaryHeader />
        <SummaryRows />
        <SummarySums />
      </ScrollView>
    </ModalWrap>
  );
};

const useSaveBestScore = () => {
  // const score = useGameScore();
  // const gameName = useGameName();
  // const duration = useGameDuration();
  // const operations = useMathOperations();
  // const uid = useUser('uid') as string;
  // const provider = useUser('provider') as LOGIN_PROVIDERS;
  // const bestScore = useBestScore();
  // const saveDataToRemoteAndLoacal = useCallback(async () => {
  //   const opName = getOperationName(operations);
  //   if (!(provider === LOGIN_PROVIDERS.GUEST)) {
  //     await saveData('users', uid, {
  //       bestScores: {
  //         [gameName]: {
  //           [duration]: {
  //             [opName]: score,
  //           },
  //         },
  //       },
  //     });
  //   }
  //   updateBestScores({score, gameName, duration, opName});
  // }, [operations, provider, updateBestScores, score, gameName, duration, uid]);
  // useEffect(() => {
  //   if (score > bestScore) {
  //     saveDataToRemoteAndLoacal();
  //   }
  // }, [bestScore, saveDataToRemoteAndLoacal, score]);
};

const SummarySums = () => {
  const tasksLimit = useGameTaskLimit();
  const duration = useGameDuration();
  const operations = useGameMathOperations();
  const summary = useGameSummary();
  const isTimeBased = tasksLimit === 0;

  const {totalTime, speedPerTask, operationsSpeed} = formatSummary(
    summary,
    isTimeBased,
    operations,
    duration * 1000,
  );

  return (
    <View style={[styles.summaryContainer, {borderTopColor: COLORS.BLACK}]}>
      <View style={[GS.row, GS.fullWidth, GS.justifySpaceBetween]}>
        <Text style={[GS.base60016]}>{`${
          isTimeBased
            ? summary.length > 0
              ? summary.length - 1
              : 0
            : summary.length
        } Tasks`}</Text>
        <Text style={[GS.base60016]}>
          {isTimeBased ? millisToSeconds(duration * 1000) : totalTime}
        </Text>
      </View>
      <View style={[GS.row, GS.justifySpaceBetween, GS.fullWidth]}>
        <Text style={[GS.base60016]}>Time Per Task</Text>
        <Text style={[GS.base60016]}>{`${speedPerTask} Sec`}</Text>
      </View>
      {operationsSpeed.map(([operation, operationSpeedPerTask]) => {
        return (
          <View key={operation}>
            <View style={[GS.row, GS.justifySpaceBetween]}>
              <Text style={[GS.base60016]}>{`${operation} Time Per Task`}</Text>
              <Text style={[GS.base60016]}>{`${operationSpeedPerTask}`}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

const SummaryRows = () => {
  const tasksLimit = useGameTaskLimit();
  const duration = useGameDuration();
  const operations = useGameMathOperations();
  const isTimeBased = tasksLimit === 0;
  const summary = useGameSummary();
  const {min, max} = formatSummary(
    summary,
    isTimeBased,
    operations,
    duration * 1000,
  );

  return (
    <>
      {summary.map((sum, i) => {
        let color = COLORS.BLACK;
        if (sum?.time === min) {
          color = COLORS.BLACK;
          sum.problem = sum.problem?.includes('Best')
            ? sum.problem
            : sum.problem + '  Best';
        } else if (sum?.time === max) {
          sum.problem = sum.problem?.includes('Worst')
            ? sum.problem
            : sum.problem + '  Worst';
          color = COLORS.RED;
        }
        let textStyle: TextStyle = {color};
        if (isTimeBased && i === summary.length - 1) {
          textStyle = {
            ...textStyle,
            color: COLORS.BLACK,
            textDecorationLine: 'line-through',
            textDecorationStyle: 'solid',
          };
        }

        return (
          <View key={i} style={styles.summaryRow}>
            <View style={GS.alignStart}>
              <Text style={[GS.base60016, textStyle]}>{`${i + 1}.  ${
                sum.problem
              }`}</Text>
            </View>
            <View>
              <Text style={[GS.base60016, {color}]}>
                {millisToSeconds(sum.time)}
              </Text>
            </View>
          </View>
        );
      })}
    </>
  );
};

const SummaryHeader = () => {
  return (
    <>
      <Text style={[GS.base60024, styles.modalTitle]}>{'Summary'}</Text>
      {false && <NewRecord />}
      <View style={[styles.summaryRow]}>
        <View style={GS.alignStart}>
          <Text style={[GS.base60024]}>Tasks</Text>
        </View>
        <View>
          <Text style={[GS.base60024]}>Time</Text>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: normalizeWidth(300),
  },
  summaryModal: {
    justifyContent: 'flex-start',
    minHeight: Consts.screenHeight * 0.5,
    width: normalizeWidth(300),
  },
  modalTitle: {
    paddingVertical: normalizeHeight(8),
  },
  summaryRow: {
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'space-between',
    paddingBottom: normalizeHeight(4),
  },
  summaryContainer: {
    width: '100%',
    paddingVertical: 5,
    borderTopWidth: 2,
  },
});
