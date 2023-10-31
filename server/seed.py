import random
from faker import Faker

fake = Faker()

# log post data
def generate_blog_post():
    title = fake.sentence(nb_words=4)
    content = fake.paragraphs(nb=3)
    author = fake.name()
    date = fake.date_this_decade()
    return {
    "title": title,
    "content": content,
    "author": author,
    "date": date,
    }

# Create a list of blog posts
blog_posts = [generate_blog_post() for _ in range(10)]
for i, post in enumerate(blog_posts, start=1):
    print(f"Blog Post {i}:")
    print(f"Title: {post['title']}")
    print(f"Author: {post['author']}")
    print(f"Date: {post['date']}")
    print("Content:")
for paragraph in post['content']:
    print(paragraph)
    print("\n")
    