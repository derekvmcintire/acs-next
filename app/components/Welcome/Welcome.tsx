import { Text, Title } from '@mantine/core';
import classes from './Welcome.module.css';

export default function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="right" mt={25} mr={25}>
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          ACS
        </Text>
      </Title>
    </>
  );
}
