import asyncio

async def fetch():
    await asyncio.sleep(1)
    return "数据"

asyncio.run(fetch())