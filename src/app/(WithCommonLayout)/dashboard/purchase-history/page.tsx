import Sidebar from '@/components/modules/dashboard/sidebar';
import SHContainer from '@/components/ui/core/SHContainer';
import { getAllPurchaseHistory } from '@/services/Transaction';
import React from 'react';

const PurchaseHistoryPage = async ({ searchParams }: { searchParams: Promise<{ page: string }> }) => {
     const { page } = await searchParams;
        const { data, meta } = await getAllPurchaseHistory(page, "5");
    return (
         <div>
            <Sidebar />
            <div className='bg-[#f8fafd]'>
                <SHContainer>
                    
                </SHContainer>
            </div>
        </div>
    );
};

export default PurchaseHistoryPage;
