import { Button } from '@/components';
import { IntroMessage } from '@/constants';
import { Divider, Text } from 'palette';
import { useCallback, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import PagerView from 'react-native-pager-view';
import { TextWithAnimationPage } from './TextWithAnimationPage';

function IntroductionPage() {
  const [pageIdx, setPageIdx] = useState(0);
  const pagerViewRef = useRef<PagerView | null>(null);

  const _scrollToNextPage = useCallback(() => {
    pagerViewRef.current?.setPage(pageIdx + 1);
  }, [pageIdx]);
  const _scrollToPreviousPage = useCallback(() => {
    pagerViewRef.current?.setPage(pageIdx - 1);
  }, [pageIdx]);

  return (
    <View style={styles.container}>
      <PagerView
        ref={pagerViewRef}
        style={styles.innerContainer}
        initialPage={0}
        onPageScroll={(event) => { setPageIdx(event.nativeEvent.position); }}
      >
        {IntroMessage.map((value, index) => {
          return (
            <View key={index.toString()}>
              <TextWithAnimationPage
                source={value.file}
                title={value.title}
                description={value.description}
              />
            </View>
          );
        })}
      </PagerView>
      <Divider />
      <View style={styles.footerContainer}>
        <Button
          label='이전'
          icon='arrow-back-outline'
          color='black'
          size={20}
          reverse
          onPress={_scrollToPreviousPage}
        />
        <Text>{`${pageIdx + 1}/${IntroMessage.length}`}</Text>
        <Button
          label={pageIdx == IntroMessage.length - 1 ? '시작하기' : '다음'}
          icon={pageIdx == IntroMessage.length - 1 ? 'checkmark-outline' : 'arrow-forward-outline'}
          color='black'
          size={20}
          onPress={_scrollToNextPage}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  innerContainer: {
    flex: 1,
  },
  footerContainer: {
    width: '100%',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});

export default IntroductionPage;