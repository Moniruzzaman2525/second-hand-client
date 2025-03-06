import GetUserPurchaseHistory from '@/components/modules/dashboard/purchase';
import Sidebar from '@/components/modules/dashboard/sidebar';
import SHContainer from '@/components/ui/core/SHContainer';
import { getAllPurchaseHistory } from '@/services/Transaction';
import React from 'react';

const PurchaseHistoryPage = async ({ searchParams }: { searchParams: Promise<{ page: string }> }) => {
     const { page } = await searchParams;
        const { data:products } = await getAllPurchaseHistory(page, "5");
    return (
         <div>
            <Sidebar />
            <div className='bg-[#f8fafd]'>
                <SHContainer>
                    <GetUserPurchaseHistory products={products?.result} meta={products.meta} />
                </SHContainer>
            </div>
        </div>
    );
};

export default PurchaseHistoryPage;
