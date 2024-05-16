import Link from "next/link";

const artisan = async ({params}) => {
    const artisanID = params.slug;
    const datas = await fetch('http://localhost:3000/datas.json').then((res) => res.json());

    const artisanProfile = datas.map(item => item.id === artisanID ? item : null);




    console.log('item',artisanProfile[0].name)


  return (
    <>
        <div className="flex w-full">
                {artisanProfile && (
                    <div>
                        <h2>{artisanProfile[0].name}</h2>
                        <p>{artisanProfile[0].speciality}</p>
                        <p>Contact: {artisanProfile[0].note}</p>
                        <p>Contact: {artisanProfile[0].location}</p>
                        <p>Contact: {artisanProfile[0].about}</p>
                        <p>Contact: {artisanProfile[0].email}</p>
                        <p>Contact: {artisanProfile[0].website}</p>
                        <p>Contact: {artisanProfile[0].category}</p>
                    </div>
                )}
            </div>
    </>
  )
}

export default artisan