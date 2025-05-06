import React, { useContext } from 'react';
import Rating from '@mui/material/Rating';
import { CardData } from '../../App';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';

const CategorieByProduct = () => {
    const navigate = useNavigate();
    const { finalData } = useContext(CardData);

    return (
        <div className="px-4 md:px-20 py-10">
            {finalData.length <= 0 ? (
                <Loading />
            ) : (
                <div className="flex flex-wrap gap-6 justify-center">
                    {finalData.map((item) => (
                        <div
                            key={item.id}
                            className="shadow-xl hover:shadow-2xl transition rounded-2xl w-64 flex flex-col items-center gap-4 p-4 cursor-pointer"
                            onClick={() => navigate(`/detailspage/${item.id}`)}
                        >
                            <div className="h-40 flex justify-center items-center">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="object-contain h-full max-w-full"
                                />
                            </div>
                            <div className="text-center space-y-1">
                                <p className="text-sm font-medium line-clamp-2">{item.title}</p>
                                <p className="text-base font-semibold">${item.price}</p>
                                <div className="flex items-center justify-center gap-1 text-sm text-gray-600">
                                    <Rating
                                        name="read-only-rating"
                                        value={item?.rating?.rate || 0}
                                        precision={0.5}
                                        size="small"
                                        readOnly
                                    />
                                    <span>({item?.rating?.count})</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CategorieByProduct;
