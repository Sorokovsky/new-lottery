import { memo } from 'react'
import Table from '../../common/Table/Table';
import { useLotteryStore } from '../../../store/lottery/lottery.store';
import cn from 'clsx';
import styles from "./Lottery.module.sass";

const LotteryPage = () => {
  const people = useLotteryStore(state => state.people);

  return (
    <main className={cn(styles.page)}>
      <Table
        people={people}
        title="Список учасників"
      />
    </main>
  )
}

export default memo(LotteryPage);