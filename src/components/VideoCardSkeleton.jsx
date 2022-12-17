import Skeleton from "react-loading-skeleton";

const CardSkeleton = ({ cards }) => {
    return Array(cards).fill(0).map((_, id) =>
        <div className="card-skeleton" key={id}>
            <div className="flex flex-col mb-8">
                <Skeleton className="relative h-48 md:h-40 md:rounded-xl overflow-hidden" />
                <div className="flex mt-3">
                    <div className="flex items-start">
                        <Skeleton className="flex h-9 w-9 rounded-full overflow-hidden" />
                    </div>
                    <div className="flex w-full flex-col ml-3 overflow-hidden">
                        <Skeleton className="text-sm" />
                        <Skeleton className="mt-2 flex items-center" />
                        <Skeleton className="flex  relative top-[-10px]" />
                    </div>
                </div>

            </div>
        </div>
    )

}

export default CardSkeleton