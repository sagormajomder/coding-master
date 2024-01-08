import React, { useState } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import RenderHTML from 'react-native-render-html';
import Colors from '../../Common/Colors';

export default function ContentItem({ description, output }) {
  const [isRun, setIsRun] = useState(false);

  const { width } = useWindowDimensions();

  const desciptionSrc = {
    html: description,
  };

  const outputSrc = {
    html: output,
  };

  return (
    description && (
      <View>
        <RenderHTML
          contentWidth={width}
          source={desciptionSrc}
          tagsStyles={descStyles}
        />
        {output !== undefined ? (
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            <TouchableOpacity
              style={[
                { marginTop: -20 },
                isRun ? { marginBottom: 20 } : { marginBottom: 50 },
              ]}>
              <Text
                style={{
                  padding: 12,
                  backgroundColor: Colors.PRIMARY,
                  borderRadius: 10,
                  width: 100,
                  fontSize: 15,
                  color: Colors.WHITE,
                  textAlign: 'center',
                }}
                onPress={() => setIsRun(true)}>
                Run
              </Text>
            </TouchableOpacity>
          </View>
        ) : null}

        {isRun && (
          <>
            <Text
              style={[
                { fontSize: 20, fontWeight: '600' },
                isRun ? { marginBottom: 10 } : { marginBottom: 40 },
              ]}>
              Output
            </Text>

            <RenderHTML
              contentWidth={width}
              source={outputSrc}
              tagsStyles={outputStyles}
            />
          </>
        )}
      </View>
    )
  );
}

const descStyles = {
  body: {
    fontSize: 17,
  },
  code: {
    backgroundColor: Colors.BLACK,
    color: Colors.WHITE,
    padding: 20,
    borderRadius: 15,
  },
};

const outputStyles = {
  body: {
    fontSize: 17,
    backgroundColor: Colors.BLACK,
    color: Colors.WHITE,
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
  },
  code: {
    backgroundColor: Colors.BLACK,
    color: Colors.WHITE,
    padding: 20,
    borderRadius: 15,
  },
};
