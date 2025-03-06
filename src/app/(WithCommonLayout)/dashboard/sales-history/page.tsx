import SellerHistory from '@/components/modules/dashboard/seller';
import Sidebar from '@/components/modules/dashboard/sidebar';
import SHContainer from '@/components/ui/core/SHContainer';
import { getAllSellerHistory } from '@/services/Transaction';
import React from 'react';

const SalesHistoryPage = async ({ searchParams }: { searchParams: Promise<{ page: string }> }) => {
    const { page } = await searchParams;
    const { data: products } = await getAllSellerHistory(page, "5");
    return (
        <div>
            <Sidebar />
            <div className='bg-[#f8fafd]'>
                <SHContainer>
                    <SellerHistory products={products?.result} meta={products.meta} />
                </SHContainer>
            </div>
        </div>
    );
};

export default SalesHistoryPage;
