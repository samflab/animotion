import { nanoid } from 'nanoid'
/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */

console.log(nanoid)
export const videos = [
  {
    _id: nanoid(),
    title: "Demon Slayer Opening Theme OP1 Season 1",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    creator: "Ufotable",
    date: "23rd March 2022",
    views: "2.8M",
    duration:"3:00",
    tag:"music",
    thumbnail:"https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/demon-slayer-group-artwork-big-mart.jpg"
  },
  {
    _id: nanoid(),
    title: "Rumbling | Attack on Titan Season 4 Opening Theme",
    creator: "Mappa Studios",
    date: "24th March 2022",
    views:"120",
    duration:"6:09",
    tag:"music",
    thumbnail:"https://yandex-images.clstorage.net/md100D363/fbceba4zAdCl/Yk-5bsBk9U6DqExnj7qYvSPX1cZq7sQ7xANxUJk-HjM88_RhSB7aEria_nUqPZK1I5nrx6dHhZPeFARfQnRUwCYbeN8klFVeg5ic9j8q6A2jJ1WHKp7hvrWzdPTJy3onTLPit-8J7VFveZyiPfoGQCZ8jgNGkvBjKLMlChWxglcR_ep-ZLdV_LfpLLb_aWp60yf107iJJInwc_Z1PUvb1noX8Bc9KK3DDsvcw--pZbLGXc1iktGhsSuAQBpm0YLGYo4LDJZ0V69maU327drZyLBlN_MYCZebYOBXNw9Ii_ZaNABXfTr90505r2L8-5WDJc2Ms7PzgOLIw1O51uJCxlBtSH5klXU9VCiM5wz4WXih5CQw-qp3-MOiFVT-KdgmK8Xy5y8pT5Atyh6i_iqGs6SOfxKy40LyeyCSioXBYkeTTXtdRjclvZXZ7ff82op7AyQFkfn4ltrRQ0cG_0tr5tl0gRR-WZ0yP9vNMv8r9cNVP-4B8SHi0vjD8dvG0_D0IxyIH6b25S0l2a4FHNhZ-yKXt9G4yieqAlDG9I3Z-tbpRLI2DTiMMCyaLlEPqhZyh_w8k4BQgxD6Q6PqhJCBhcJc6dxW1KVet8u_JU06iKjRdWZAaev0uyCA5UaeuYoGm3ZhBI1qjtM8Cj5ifcgW03WtnGJBQbGRKFHCe8ZQ0xUgbYnPdLWHvOYqfKc_uhmIYgT1IerblZkxE0TEzioLxDnm4Ha_m2xCb3j9YH45hsJW3E8QkNCS49nxw2uWwaJm0q1ZXoTkRz0Vy3xHzloJ2-Gkh6IaC9crkoLGlz4pSjXL54InvykvgPy4XaCdOASidd_NcvPh4ZJZs7A4BoFTFzOtGm52FtQ8Ncuctx_Z-ijzp_USWOo06tOA5UTNaqo32kfTJO453ePs6G6wjni04mUd7gAwIWMTe1LxKGVBA5cRbPsMdLV3zodp7tf_ymv7kjdH8Mv6dvlzk4Tmo",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: nanoid(),
    title: "Rumbling | Attack on Titan Season 4 Opening Theme",
    creator: "Mappa Studios",
    date: "24th March 2022",
    views:"120",
    duration:"6:09",
    tag:"music",
    thumbnail:"https://yandex-images.clstorage.net/md100D363/fbceba4zAdCl/Yk-5bsBk9U6DqExnj7qYvSPX1cZq7sQ7xANxUJk-HjM88_RhSB7aEria_nUqPZK1I5nrx6dHhZPeFARfQnRUwCYbeN8klFVeg5ic9j8q6A2jJ1WHKp7hvrWzdPTJy3onTLPit-8J7VFveZyiPfoGQCZ8jgNGkvBjKLMlChWxglcR_ep-ZLdV_LfpLLb_aWp60yf107iJJInwc_Z1PUvb1noX8Bc9KK3DDsvcw--pZbLGXc1iktGhsSuAQBpm0YLGYo4LDJZ0V69maU327drZyLBlN_MYCZebYOBXNw9Ii_ZaNABXfTr90505r2L8-5WDJc2Ms7PzgOLIw1O51uJCxlBtSH5klXU9VCiM5wz4WXih5CQw-qp3-MOiFVT-KdgmK8Xy5y8pT5Atyh6i_iqGs6SOfxKy40LyeyCSioXBYkeTTXtdRjclvZXZ7ff82op7AyQFkfn4ltrRQ0cG_0tr5tl0gRR-WZ0yP9vNMv8r9cNVP-4B8SHi0vjD8dvG0_D0IxyIH6b25S0l2a4FHNhZ-yKXt9G4yieqAlDG9I3Z-tbpRLI2DTiMMCyaLlEPqhZyh_w8k4BQgxD6Q6PqhJCBhcJc6dxW1KVet8u_JU06iKjRdWZAaev0uyCA5UaeuYoGm3ZhBI1qjtM8Cj5ifcgW03WtnGJBQbGRKFHCe8ZQ0xUgbYnPdLWHvOYqfKc_uhmIYgT1IerblZkxE0TEzioLxDnm4Ha_m2xCb3j9YH45hsJW3E8QkNCS49nxw2uWwaJm0q1ZXoTkRz0Vy3xHzloJ2-Gkh6IaC9crkoLGlz4pSjXL54InvykvgPy4XaCdOASidd_NcvPh4ZJZs7A4BoFTFzOtGm52FtQ8Ncuctx_Z-ijzp_USWOo06tOA5UTNaqo32kfTJO453ePs6G6wjni04mUd7gAwIWMTe1LxKGVBA5cRbPsMdLV3zodp7tf_ymv7kjdH8Mv6dvlzk4Tmo",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: nanoid(),
    title: "Rumbling | Attack on Titan Season 4 Opening Theme",
    creator: "Mappa Studios",
    date: "24th March 2022",
    views:"120",
    duration:"6:09",
    tag:"music",
    thumbnail:"https://yandex-images.clstorage.net/md100D363/fbceba4zAdCl/Yk-5bsBk9U6DqExnj7qYvSPX1cZq7sQ7xANxUJk-HjM88_RhSB7aEria_nUqPZK1I5nrx6dHhZPeFARfQnRUwCYbeN8klFVeg5ic9j8q6A2jJ1WHKp7hvrWzdPTJy3onTLPit-8J7VFveZyiPfoGQCZ8jgNGkvBjKLMlChWxglcR_ep-ZLdV_LfpLLb_aWp60yf107iJJInwc_Z1PUvb1noX8Bc9KK3DDsvcw--pZbLGXc1iktGhsSuAQBpm0YLGYo4LDJZ0V69maU327drZyLBlN_MYCZebYOBXNw9Ii_ZaNABXfTr90505r2L8-5WDJc2Ms7PzgOLIw1O51uJCxlBtSH5klXU9VCiM5wz4WXih5CQw-qp3-MOiFVT-KdgmK8Xy5y8pT5Atyh6i_iqGs6SOfxKy40LyeyCSioXBYkeTTXtdRjclvZXZ7ff82op7AyQFkfn4ltrRQ0cG_0tr5tl0gRR-WZ0yP9vNMv8r9cNVP-4B8SHi0vjD8dvG0_D0IxyIH6b25S0l2a4FHNhZ-yKXt9G4yieqAlDG9I3Z-tbpRLI2DTiMMCyaLlEPqhZyh_w8k4BQgxD6Q6PqhJCBhcJc6dxW1KVet8u_JU06iKjRdWZAaev0uyCA5UaeuYoGm3ZhBI1qjtM8Cj5ifcgW03WtnGJBQbGRKFHCe8ZQ0xUgbYnPdLWHvOYqfKc_uhmIYgT1IerblZkxE0TEzioLxDnm4Ha_m2xCb3j9YH45hsJW3E8QkNCS49nxw2uWwaJm0q1ZXoTkRz0Vy3xHzloJ2-Gkh6IaC9crkoLGlz4pSjXL54InvykvgPy4XaCdOASidd_NcvPh4ZJZs7A4BoFTFzOtGm52FtQ8Ncuctx_Z-ijzp_USWOo06tOA5UTNaqo32kfTJO453ePs6G6wjni04mUd7gAwIWMTe1LxKGVBA5cRbPsMdLV3zodp7tf_ymv7kjdH8Mv6dvlzk4Tmo",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: nanoid(),
    title: "Rumbling | Attack on Titan Season 4 Opening Theme",
    creator: "Mappa Studios",
    date: "24th March 2022",
    views:"120",
    duration:"6:09",
    tag:"music",
    thumbnail:"https://yandex-images.clstorage.net/md100D363/fbceba4zAdCl/Yk-5bsBk9U6DqExnj7qYvSPX1cZq7sQ7xANxUJk-HjM88_RhSB7aEria_nUqPZK1I5nrx6dHhZPeFARfQnRUwCYbeN8klFVeg5ic9j8q6A2jJ1WHKp7hvrWzdPTJy3onTLPit-8J7VFveZyiPfoGQCZ8jgNGkvBjKLMlChWxglcR_ep-ZLdV_LfpLLb_aWp60yf107iJJInwc_Z1PUvb1noX8Bc9KK3DDsvcw--pZbLGXc1iktGhsSuAQBpm0YLGYo4LDJZ0V69maU327drZyLBlN_MYCZebYOBXNw9Ii_ZaNABXfTr90505r2L8-5WDJc2Ms7PzgOLIw1O51uJCxlBtSH5klXU9VCiM5wz4WXih5CQw-qp3-MOiFVT-KdgmK8Xy5y8pT5Atyh6i_iqGs6SOfxKy40LyeyCSioXBYkeTTXtdRjclvZXZ7ff82op7AyQFkfn4ltrRQ0cG_0tr5tl0gRR-WZ0yP9vNMv8r9cNVP-4B8SHi0vjD8dvG0_D0IxyIH6b25S0l2a4FHNhZ-yKXt9G4yieqAlDG9I3Z-tbpRLI2DTiMMCyaLlEPqhZyh_w8k4BQgxD6Q6PqhJCBhcJc6dxW1KVet8u_JU06iKjRdWZAaev0uyCA5UaeuYoGm3ZhBI1qjtM8Cj5ifcgW03WtnGJBQbGRKFHCe8ZQ0xUgbYnPdLWHvOYqfKc_uhmIYgT1IerblZkxE0TEzioLxDnm4Ha_m2xCb3j9YH45hsJW3E8QkNCS49nxw2uWwaJm0q1ZXoTkRz0Vy3xHzloJ2-Gkh6IaC9crkoLGlz4pSjXL54InvykvgPy4XaCdOASidd_NcvPh4ZJZs7A4BoFTFzOtGm52FtQ8Ncuctx_Z-ijzp_USWOo06tOA5UTNaqo32kfTJO453ePs6G6wjni04mUd7gAwIWMTe1LxKGVBA5cRbPsMdLV3zodp7tf_ymv7kjdH8Mv6dvlzk4Tmo",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: nanoid(),
    title: "Rumbling | Attack on Titan Season 4 Opening Theme",
    creator: "Mappa Studios",
    date: "24th March 2022",
    views:"120",
    duration:"6:09",
    tag:"music",
    thumbnail:"https://yandex-images.clstorage.net/md100D363/fbceba4zAdCl/Yk-5bsBk9U6DqExnj7qYvSPX1cZq7sQ7xANxUJk-HjM88_RhSB7aEria_nUqPZK1I5nrx6dHhZPeFARfQnRUwCYbeN8klFVeg5ic9j8q6A2jJ1WHKp7hvrWzdPTJy3onTLPit-8J7VFveZyiPfoGQCZ8jgNGkvBjKLMlChWxglcR_ep-ZLdV_LfpLLb_aWp60yf107iJJInwc_Z1PUvb1noX8Bc9KK3DDsvcw--pZbLGXc1iktGhsSuAQBpm0YLGYo4LDJZ0V69maU327drZyLBlN_MYCZebYOBXNw9Ii_ZaNABXfTr90505r2L8-5WDJc2Ms7PzgOLIw1O51uJCxlBtSH5klXU9VCiM5wz4WXih5CQw-qp3-MOiFVT-KdgmK8Xy5y8pT5Atyh6i_iqGs6SOfxKy40LyeyCSioXBYkeTTXtdRjclvZXZ7ff82op7AyQFkfn4ltrRQ0cG_0tr5tl0gRR-WZ0yP9vNMv8r9cNVP-4B8SHi0vjD8dvG0_D0IxyIH6b25S0l2a4FHNhZ-yKXt9G4yieqAlDG9I3Z-tbpRLI2DTiMMCyaLlEPqhZyh_w8k4BQgxD6Q6PqhJCBhcJc6dxW1KVet8u_JU06iKjRdWZAaev0uyCA5UaeuYoGm3ZhBI1qjtM8Cj5ifcgW03WtnGJBQbGRKFHCe8ZQ0xUgbYnPdLWHvOYqfKc_uhmIYgT1IerblZkxE0TEzioLxDnm4Ha_m2xCb3j9YH45hsJW3E8QkNCS49nxw2uWwaJm0q1ZXoTkRz0Vy3xHzloJ2-Gkh6IaC9crkoLGlz4pSjXL54InvykvgPy4XaCdOASidd_NcvPh4ZJZs7A4BoFTFzOtGm52FtQ8Ncuctx_Z-ijzp_USWOo06tOA5UTNaqo32kfTJO453ePs6G6wjni04mUd7gAwIWMTe1LxKGVBA5cRbPsMdLV3zodp7tf_ymv7kjdH8Mv6dvlzk4Tmo",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: nanoid(),
    title: "Rumbling | Attack on Titan Season 4 Opening Theme",
    creator: "Mappa Studios",
    date: "24th March 2022",
    views:"120",
    duration:"6:09",
    tag:"music",
    thumbnail:"https://yandex-images.clstorage.net/md100D363/fbceba4zAdCl/Yk-5bsBk9U6DqExnj7qYvSPX1cZq7sQ7xANxUJk-HjM88_RhSB7aEria_nUqPZK1I5nrx6dHhZPeFARfQnRUwCYbeN8klFVeg5ic9j8q6A2jJ1WHKp7hvrWzdPTJy3onTLPit-8J7VFveZyiPfoGQCZ8jgNGkvBjKLMlChWxglcR_ep-ZLdV_LfpLLb_aWp60yf107iJJInwc_Z1PUvb1noX8Bc9KK3DDsvcw--pZbLGXc1iktGhsSuAQBpm0YLGYo4LDJZ0V69maU327drZyLBlN_MYCZebYOBXNw9Ii_ZaNABXfTr90505r2L8-5WDJc2Ms7PzgOLIw1O51uJCxlBtSH5klXU9VCiM5wz4WXih5CQw-qp3-MOiFVT-KdgmK8Xy5y8pT5Atyh6i_iqGs6SOfxKy40LyeyCSioXBYkeTTXtdRjclvZXZ7ff82op7AyQFkfn4ltrRQ0cG_0tr5tl0gRR-WZ0yP9vNMv8r9cNVP-4B8SHi0vjD8dvG0_D0IxyIH6b25S0l2a4FHNhZ-yKXt9G4yieqAlDG9I3Z-tbpRLI2DTiMMCyaLlEPqhZyh_w8k4BQgxD6Q6PqhJCBhcJc6dxW1KVet8u_JU06iKjRdWZAaev0uyCA5UaeuYoGm3ZhBI1qjtM8Cj5ifcgW03WtnGJBQbGRKFHCe8ZQ0xUgbYnPdLWHvOYqfKc_uhmIYgT1IerblZkxE0TEzioLxDnm4Ha_m2xCb3j9YH45hsJW3E8QkNCS49nxw2uWwaJm0q1ZXoTkRz0Vy3xHzloJ2-Gkh6IaC9crkoLGlz4pSjXL54InvykvgPy4XaCdOASidd_NcvPh4ZJZs7A4BoFTFzOtGm52FtQ8Ncuctx_Z-ijzp_USWOo06tOA5UTNaqo32kfTJO453ePs6G6wjni04mUd7gAwIWMTe1LxKGVBA5cRbPsMdLV3zodp7tf_ymv7kjdH8Mv6dvlzk4Tmo",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: nanoid(),
    title: "Rumbling | Attack on Titan Season 4 Opening Theme",
    creator: "Mappa Studios",
    date: "24th March 2022",
    views:"120",
    duration:"6:09",
    tag:"music",
    thumbnail:"https://yandex-images.clstorage.net/md100D363/fbceba4zAdCl/Yk-5bsBk9U6DqExnj7qYvSPX1cZq7sQ7xANxUJk-HjM88_RhSB7aEria_nUqPZK1I5nrx6dHhZPeFARfQnRUwCYbeN8klFVeg5ic9j8q6A2jJ1WHKp7hvrWzdPTJy3onTLPit-8J7VFveZyiPfoGQCZ8jgNGkvBjKLMlChWxglcR_ep-ZLdV_LfpLLb_aWp60yf107iJJInwc_Z1PUvb1noX8Bc9KK3DDsvcw--pZbLGXc1iktGhsSuAQBpm0YLGYo4LDJZ0V69maU327drZyLBlN_MYCZebYOBXNw9Ii_ZaNABXfTr90505r2L8-5WDJc2Ms7PzgOLIw1O51uJCxlBtSH5klXU9VCiM5wz4WXih5CQw-qp3-MOiFVT-KdgmK8Xy5y8pT5Atyh6i_iqGs6SOfxKy40LyeyCSioXBYkeTTXtdRjclvZXZ7ff82op7AyQFkfn4ltrRQ0cG_0tr5tl0gRR-WZ0yP9vNMv8r9cNVP-4B8SHi0vjD8dvG0_D0IxyIH6b25S0l2a4FHNhZ-yKXt9G4yieqAlDG9I3Z-tbpRLI2DTiMMCyaLlEPqhZyh_w8k4BQgxD6Q6PqhJCBhcJc6dxW1KVet8u_JU06iKjRdWZAaev0uyCA5UaeuYoGm3ZhBI1qjtM8Cj5ifcgW03WtnGJBQbGRKFHCe8ZQ0xUgbYnPdLWHvOYqfKc_uhmIYgT1IerblZkxE0TEzioLxDnm4Ha_m2xCb3j9YH45hsJW3E8QkNCS49nxw2uWwaJm0q1ZXoTkRz0Vy3xHzloJ2-Gkh6IaC9crkoLGlz4pSjXL54InvykvgPy4XaCdOASidd_NcvPh4ZJZs7A4BoFTFzOtGm52FtQ8Ncuctx_Z-ijzp_USWOo06tOA5UTNaqo32kfTJO453ePs6G6wjni04mUd7gAwIWMTe1LxKGVBA5cRbPsMdLV3zodp7tf_ymv7kjdH8Mv6dvlzk4Tmo",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: nanoid(),
    title: "Rumbling | Attack on Titan Season 4 Opening Theme",
    creator: "Mappa Studios",
    date: "24th March 2022",
    views:"120",
    duration:"6:09",
    tag:"music",
    thumbnail:"https://yandex-images.clstorage.net/md100D363/fbceba4zAdCl/Yk-5bsBk9U6DqExnj7qYvSPX1cZq7sQ7xANxUJk-HjM88_RhSB7aEria_nUqPZK1I5nrx6dHhZPeFARfQnRUwCYbeN8klFVeg5ic9j8q6A2jJ1WHKp7hvrWzdPTJy3onTLPit-8J7VFveZyiPfoGQCZ8jgNGkvBjKLMlChWxglcR_ep-ZLdV_LfpLLb_aWp60yf107iJJInwc_Z1PUvb1noX8Bc9KK3DDsvcw--pZbLGXc1iktGhsSuAQBpm0YLGYo4LDJZ0V69maU327drZyLBlN_MYCZebYOBXNw9Ii_ZaNABXfTr90505r2L8-5WDJc2Ms7PzgOLIw1O51uJCxlBtSH5klXU9VCiM5wz4WXih5CQw-qp3-MOiFVT-KdgmK8Xy5y8pT5Atyh6i_iqGs6SOfxKy40LyeyCSioXBYkeTTXtdRjclvZXZ7ff82op7AyQFkfn4ltrRQ0cG_0tr5tl0gRR-WZ0yP9vNMv8r9cNVP-4B8SHi0vjD8dvG0_D0IxyIH6b25S0l2a4FHNhZ-yKXt9G4yieqAlDG9I3Z-tbpRLI2DTiMMCyaLlEPqhZyh_w8k4BQgxD6Q6PqhJCBhcJc6dxW1KVet8u_JU06iKjRdWZAaev0uyCA5UaeuYoGm3ZhBI1qjtM8Cj5ifcgW03WtnGJBQbGRKFHCe8ZQ0xUgbYnPdLWHvOYqfKc_uhmIYgT1IerblZkxE0TEzioLxDnm4Ha_m2xCb3j9YH45hsJW3E8QkNCS49nxw2uWwaJm0q1ZXoTkRz0Vy3xHzloJ2-Gkh6IaC9crkoLGlz4pSjXL54InvykvgPy4XaCdOASidd_NcvPh4ZJZs7A4BoFTFzOtGm52FtQ8Ncuctx_Z-ijzp_USWOo06tOA5UTNaqo32kfTJO453ePs6G6wjni04mUd7gAwIWMTe1LxKGVBA5cRbPsMdLV3zodp7tf_ymv7kjdH8Mv6dvlzk4Tmo",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },

  {
    _id: nanoid(),
    title: "Rumbling | Attack on Titan Season 4 Opening Theme",
    creator: "Mappa Studios",
    date: "24th March 2022",
    views:"120",
    duration:"6:09",
    tag:"music",
    thumbnail:"https://yandex-images.clstorage.net/md100D363/fbceba4zAdCl/Yk-5bsBk9U6DqExnj7qYvSPX1cZq7sQ7xANxUJk-HjM88_RhSB7aEria_nUqPZK1I5nrx6dHhZPeFARfQnRUwCYbeN8klFVeg5ic9j8q6A2jJ1WHKp7hvrWzdPTJy3onTLPit-8J7VFveZyiPfoGQCZ8jgNGkvBjKLMlChWxglcR_ep-ZLdV_LfpLLb_aWp60yf107iJJInwc_Z1PUvb1noX8Bc9KK3DDsvcw--pZbLGXc1iktGhsSuAQBpm0YLGYo4LDJZ0V69maU327drZyLBlN_MYCZebYOBXNw9Ii_ZaNABXfTr90505r2L8-5WDJc2Ms7PzgOLIw1O51uJCxlBtSH5klXU9VCiM5wz4WXih5CQw-qp3-MOiFVT-KdgmK8Xy5y8pT5Atyh6i_iqGs6SOfxKy40LyeyCSioXBYkeTTXtdRjclvZXZ7ff82op7AyQFkfn4ltrRQ0cG_0tr5tl0gRR-WZ0yP9vNMv8r9cNVP-4B8SHi0vjD8dvG0_D0IxyIH6b25S0l2a4FHNhZ-yKXt9G4yieqAlDG9I3Z-tbpRLI2DTiMMCyaLlEPqhZyh_w8k4BQgxD6Q6PqhJCBhcJc6dxW1KVet8u_JU06iKjRdWZAaev0uyCA5UaeuYoGm3ZhBI1qjtM8Cj5ifcgW03WtnGJBQbGRKFHCe8ZQ0xUgbYnPdLWHvOYqfKc_uhmIYgT1IerblZkxE0TEzioLxDnm4Ha_m2xCb3j9YH45hsJW3E8QkNCS49nxw2uWwaJm0q1ZXoTkRz0Vy3xHzloJ2-Gkh6IaC9crkoLGlz4pSjXL54InvykvgPy4XaCdOASidd_NcvPh4ZJZs7A4BoFTFzOtGm52FtQ8Ncuctx_Z-ijzp_USWOo06tOA5UTNaqo32kfTJO453ePs6G6wjni04mUd7gAwIWMTe1LxKGVBA5cRbPsMdLV3zodp7tf_ymv7kjdH8Mv6dvlzk4Tmo",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },

  {
    _id: nanoid(),
    title: "Mirai Kuriyama | Beyond the Boundary | Pencil Sketch | Timelapse",
    creator: "xyz",
    date: "25th March 2022",
    views:"34K",
    duration:"2:20",
    tag:"artwork",
    thumbnail:"https://i.ytimg.com/vi/RXsfBxDOCKQ/maxresdefault.jpg",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: nanoid(),
    title: "Goku| Dragon Ball | Pencil Sketch | Complete Video",
    creator: "xyz",
    date: "26th March 2022",
    views:"180K",
    duration:"25:20",
    tag:"artwork",
    thumbnail:"https://cdna.artstation.com/p/assets/images/images/016/597/926/large/sourodeep-dey-3.jpg?1552754348",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: nanoid(),
    title: "Goku| Dragon Ball | Pencil Sketch | Complete Video",
    creator: "xyz",
    date: "26th March 2022",
    views:"180K",
    duration:"25:20",
    tag:"artwork",
    thumbnail:"https://cdna.artstation.com/p/assets/images/images/016/597/926/large/sourodeep-dey-3.jpg?1552754348",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: nanoid(),
    title: "Goku| Dragon Ball | Pencil Sketch | Complete Video",
    creator: "xyz",
    date: "26th March 2022",
    views:"180K",
    duration:"25:20",
    tag:"artwork",
    thumbnail:"https://cdna.artstation.com/p/assets/images/images/016/597/926/large/sourodeep-dey-3.jpg?1552754348",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: nanoid(),
    title: "Goku| Dragon Ball | Pencil Sketch | Complete Video",
    creator: "xyz",
    date: "26th March 2022",
    views:"180K",
    duration:"25:20",
    tag:"artwork",
    thumbnail:"https://cdna.artstation.com/p/assets/images/images/016/597/926/large/sourodeep-dey-3.jpg?1552754348",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  
  
];
