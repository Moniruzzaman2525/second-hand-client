import { DashboardLayout } from '@/components/layout/dashboard-layout';
import SellerHistory from '@/components/modules/dashboard/seller';
import SHContainer from '@/components/ui/core/SHContainer';
import { getAllSellerHistory } from '@/services/Transaction';
import React from 'react';

const SalesHistoryPage = async ({ searchParams }: { searchParams: Promise<{ page: string }> }) => {
    const { page } = await searchParams;
    const { data: products } = await getAllSellerHistory(page, "5");
    return (
        <DashboardLayout>
            <div className='bg-[#f8fafd]'>
                <SHContainer>
                    <SellerHistory products={products?.result} meta={products.meta} />
                </SHContainer>
            </div>
        </DashboardLayout>
    );
};

export default SalesHistoryPage;
