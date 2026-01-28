type Props = {
    actions: {
        decrease: () => void
        increase: () => void
    }
    count: number
}

export const IncreaseDecreaseButtons = ({actions, count}: Props) => {
    const buttonClass = 'w-7 h-7 rounded-full border border-blue-500 flex items-center justify-center text-lg font-medium'

    return (
        <div className={'flex items-center gap-2'}>
            <button
                onClick={actions.decrease}
                className={buttonClass}
            >
                -
            </button>
            <p className={'text-lg font-bold'}>
                {count}
            </p>
            <button
                onClick={actions.increase}
                className={buttonClass}
            >
                +
            </button>
        </div>
    )
}
