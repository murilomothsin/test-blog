// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  console.log(req.query)
  const search = req.query.qs
  const page = req.query.page
  const resp = await fetch(
    `https://api.beta.mejorconsalud.com/wp-json/mc/v1/posts?search=${search}&orderby=relevance&page=${page}&per_page=10`
  )
  const data = await resp.json()
  res.statusCode = 200
  res.json({ data })
}
