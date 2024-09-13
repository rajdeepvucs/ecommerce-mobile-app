import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

import Stepper from 'react-native-stepper-ui';
import Address from './Address';
import Payment from './Payment';
import Successfull from './Successfull';

const content = [
  { title: 'Address', component: <Address /> },
  { title: 'Payment', component: <Payment /> },
  { title: 'Success', component: <Successfull /> }
];

const MyComponent = () => {
  const [active, setActive] = useState(0);

  return (
    <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 50 }}>
      {/* Step Name */}
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        {content[active].title}
      </Text>

      {/* Step Content */}
      <View style={{ flex: 1 }}>
        {content[active].component}
      </View>

      {/* Navigation Buttons */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
        {/* Back Button */}
        {active > 0 && (
          <Button
            title="Back"
            onPress={() => setActive((p) => p - 1)}
          />
        )}

        {/* Next/Finish Button */}
        {active < content.length - 1 ? (
          <Button
            title="Next"
            onPress={() => setActive((p) => p + 1)}
          />
        ) : (
          <Button
            title="Finish"
            onPress={() => alert('Finish')}
          />
        )}
      </View>
    </View>
  );
};

export default MyComponent;
