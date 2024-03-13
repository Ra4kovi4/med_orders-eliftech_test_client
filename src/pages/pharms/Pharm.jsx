import { fetchPharm, fetchPharmById } from '../../api'
import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Loader } from '../../components/Loader'
import { NotFound } from '../../components/NotFound'
import { PharmList } from '../../components/pharmList'
import { MedicateList } from '../../components/MedicateList'
import { addPharmIdToMedicates } from '../../helpers'

import css from './Pharms.module.css'

export const PharmPage = React.memo(() => {
    const [pharmData, setPharmData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [medicates, setMedicates] = useState(null)
    const [selectedPharmId, setSelectedPharmId] = useState(null)
    const [isDisabled, setIsDisabled] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        const getPharms = async () => {
            try {
                const { data } = await fetchPharm()
                setPharmData(data)

                if (data && data.result.length > 0) {
                    const firstPharmId = data.result[0]._id
                    setSelectedPharmId(firstPharmId)
                }
            } catch (error) {
                toast.error(
                    'Oops, something went wrong! Please try again later',
                    {
                        position: 'top-right',
                        autoClose: 2000
                    }
                )
            } finally {
                setIsLoading(false)
            }
        }
        getPharms()
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            if (selectedPharmId) {
                try {
                    const result = await fetchPharmById(selectedPharmId)
                    setMedicates(
                        addPharmIdToMedicates(result.medicate, selectedPharmId)
                    )
                    setIsDisabled(false)
                } catch (error) {
                    console.log(error.message)
                    setIsLoading(false)
                }
            }
        }

        fetchData()
    }, [selectedPharmId])

    const handleClick = (id) => {
        setSelectedPharmId(id)
    }

    return (
        <main className={css.page_container}>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    {!pharmData && <NotFound />}
                    {pharmData && (
                        <>
                            <h2 className={css.shopPage_title}>
                                Please select what you would like to order
                            </h2>
                            <div className={css.content_wrapper}>
                                <PharmList
                                    pharms={pharmData.result}
                                    handleClick={handleClick}
                                    selectedPharmId={selectedPharmId}
                                />
                                {medicates && (
                                    <MedicateList
                                        medicates={medicates}
                                        selectedPharmId={selectedPharmId}
                                        isDisabled={isDisabled}
                                    />
                                )}
                            </div>
                        </>
                    )}
                </>
            )}
            <ToastContainer />
        </main>
    )
})

PharmPage.displayName = 'PharmPage'
export default PharmPage
