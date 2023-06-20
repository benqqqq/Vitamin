import LoadingOrError from 'components/LoadingOrError'
import type { ReactElement } from 'react'
import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { getConfig } from './config'

export default function App(): ReactElement {
	return (
		<BrowserRouter basename={getConfig().basename}>
			<Suspense fallback={<LoadingOrError />}>
				<Routes>
					<Route path='/' element={undefined} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	)
}
