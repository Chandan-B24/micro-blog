import { useAppSelector } from "../../store/hook"
import { backgroundStyles } from "../../utils/cssutils"

const CreatePage = () => {

    const userId = useAppSelector((state) => state.user.id)

  return (
    <div style={{...backgroundStyles}} className="flex justify-center items-center">
       user is {userId}
    </div>
  )
}

export default CreatePage