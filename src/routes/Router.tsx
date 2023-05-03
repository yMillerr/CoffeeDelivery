import { Routes, Route } from 'react-router-dom'

import { AppLayout } from '../layout/AppLayout'

import { Checkout } from '../pages/Checkout'
import { Home } from '../pages/Home'
import { FinishedOrder } from '../pages/FinishedOrder'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/sucess" element={<FinishedOrder />} />
      </Route>
    </Routes>
  )
}
