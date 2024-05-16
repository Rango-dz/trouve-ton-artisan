import Link from "next/link";

const artisan = async ({params}) => {
    const artisanID = params.slug;
    const apiUrl = process.env.API_URL;
    const url = `${apiUrl}/datas.json`;
    const datas = await fetch(url).then((res) => res.json());

    const artisanProfile = datas.find(item => item.id === artisanID ? item : null);

    console.log('artisan', artisanProfile)

  return (
    <>
        <div className="flex w-full">
                {artisanProfile && (
                    <div>
                        <h2>{artisanProfile.name}</h2>
                        <p>{artisanProfile.speciality}</p>
                        <p>Contact: {artisanProfile.note}</p>
                        <p>Contact: {artisanProfile.location}</p>
                        <p>Contact: {artisanProfile.about}</p>
                        <p>Contact: {artisanProfile.email}</p>
                        <p>Contact: {artisanProfile.website}</p>
                        <p>Contact: {artisanProfile.category}</p>
                    </div>
                )}
            </div>
    </>
  )
}

export default artisan