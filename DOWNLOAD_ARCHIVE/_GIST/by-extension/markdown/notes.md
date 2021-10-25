#### KEY TAKEAWAYS <a id="mntl-sc-block-callout-heading_1-0"></a>

- Blockchain is a specific type of database.
- It differs from a typical database in the way it stores information; blockchains store data in blocks that are then chained together.
- As new data comes in it is entered into a fresh block. Once the block is filled with data it is chained onto the previous block, which makes the data chained together in chronological order.
- Different types of information can be stored on a blockchain but the most common use so far has been as a ledger for transactions.
- In Bitcoin’s case, blockchain is used in a decentralized way so that no single person or group has control—rather, all users collectively retain control.
- Decentralized blockchains are immutable, which means that the data entered is irreversible. For Bitcoin, this means that transactions are permanently recorded and viewable to anyone.

### What is Blockchain? <a id="mntl-sc-block_1-0-4"></a>

Blockchain seems complicated, and it definitely can be, but its core concept is really quite simple. A blockchain is a type of database. To be able to understand blockchain, it helps to first understand what a database actually is.

A database is a collection of information that is stored electronically on a computer system. Information, or data, in databases is typically structured in table format to allow for easier searching and filtering for specific information. What is the difference between someone using a spreadsheet to store information rather than a database?

Spreadsheets are designed for one person, or a small group of people, to store and access limited amounts of information. In contrast, a database is designed to house significantly larger amounts of information that can be accessed, filtered, and manipulated quickly and easily by any number of users at once.

Large databases achieve this by housing data on servers that are made of powerful computers. These servers can sometimes be built using hundreds or thousands of computers in order to have the computational power and storage capacity necessary for many users to access the database simultaneously. While a spreadsheet or database may be accessible to any number of people, it is often owned by a business and managed by an appointed individual that has complete control over how it works and the data within it.

So how does a blockchain differ from a database?

### Storage Structure <a id="mntl-sc-block_1-0-15"></a>

One key difference between a typical database and a blockchain is the way the data is structured. A blockchain collects information together in groups, also known as blocks, that hold sets of information. Blocks have certain storage capacities and, when filled, are chained onto the previously filled block, forming a chain of data known as the “blockchain.” All new information that follows that freshly added block is compiled into a newly formed block that will then also be added to the chain once filled.

A database structures its data into tables whereas a blockchain, like its name implies, structures its data into chunks \(blocks\) that are chained together. This makes it so that all blockchains are databases but not all databases are blockchains. This system also inherently makes an irreversible timeline of data when implemented in a decentralized nature. When a block is filled it is set in stone and becomes a part of this timeline. Each block in the chain is given an exact timestamp when it is added to the chain.

#### Transaction Process <a id="mntl-sc-block_1-0-20"></a>

![Blockchain](https://www.investopedia.com/thmb/JaW9yOVEwzy3l5SnSU57FHJW82s=/5855x3984/filters:no_upscale%28%29:max_bytes%28150000%29:strip_icc%28%29:format%28webp%29/dotdash_Final_Blockchain_Sep_2020-01-60f31a638c4944abbcfde92e1a408a30.jpg)

#### Attributes of Cryptocurrency <a id="mntl-sc-block_1-0-22"></a>

![Blockchain](https://www.investopedia.com/thmb/elQiV0XoMlmPYs-nLG2SrnL9Utk=/5855x2693/filters:no_upscale%28%29:max_bytes%28150000%29:strip_icc%28%29:format%28webp%29/dotdash_Final_Blockchain_Sep_2020-02-d8258ab814a34756bf51f1f95c78dc63.jpg)

### Decentralization <a id="mntl-sc-block_1-0-24"></a>

For the purpose of understanding blockchain, it is instructive to view it in the context of how it has been implemented by Bitcoin. Like a database, Bitcoin needs a collection of computers to store its blockchain. For Bitcoin, this blockchain is just a specific type of database that stores every Bitcoin transaction ever made. In Bitcoin’s case, and unlike most databases, these computers are not all under one roof, and each computer or group of computers is operated by a unique individual or group of individuals.

Imagine that a company owns a server comprised of 10,000 computers with a database holding all of its client's account information. This company has a warehouse containing all of these computers under one roof and has full control of each of these computers and all the information contained within them. Similarly, Bitcoin consists of thousands of computers, but each computer or group of computers that hold its blockchain is in a different geographic location and they are all operated by separate individuals or groups of people. These computers that makeup Bitcoin’s network are called nodes.

In this model, Bitcoin’s blockchain is used in a decentralized way. However, private, centralized blockchains, where the computers that make up its network are owned and operated by a single entity, do exist.

In a blockchain, each node has a full record of the data that has been stored on the blockchain since its inception. For Bitcoin, the data is the entire history of all Bitcoin transactions. If one node has an error in its data it can use the thousands of other nodes as a reference point to correct itself. This way, no one node within the network can alter information held within it. Because of this, the history of transactions in each block that make up Bitcoin’s blockchain is irreversible.

If one user tampers with Bitcoin’s record of transactions, all other nodes would cross-reference each other and easily pinpoint the node with the incorrect information. This system helps to establish an exact and transparent order of events. For Bitcoin, this information is a list of transactions, but it also is possible for a blockchain to hold a variety of information like legal contracts, state identifications, or a company’s product inventory.

In order to change how that system works, or the information stored within it, a majority of the decentralized network’s computing power would need to agree on said changes. This ensures that whatever changes do occur are in the best interests of the majority.

### Transparency <a id="mntl-sc-block_1-0-37"></a>

Because of the decentralized nature of Bitcoin’s blockchain, all transactions can be transparently viewed by either having a personal node or by using [blockchain explorers](https://www.blockchain.com/explorer?utm_campaign=dcomnav_explorer) that allow anyone to see transactions occurring live. Each node has its own copy of the chain that gets updated as fresh blocks are confirmed and added. This means that if you wanted to, you could track Bitcoin wherever it goes.

For example, exchanges have been hacked in the past where those who held Bitcoin on the exchange lost everything. While the hacker may be entirely anonymous, the Bitcoins that they extracted are easily traceable. If the Bitcoins that were stolen in some of these hacks were to be moved or spent somewhere, it would be known.

### Is Blockchain Secure? <a id="mntl-sc-block_1-0-42"></a>

Blockchain technology accounts for the issues of security and trust in several ways. First, new blocks are always stored linearly and chronologically. That is, they are always added to the “end” of the blockchain. If you take a look at Bitcoin’s blockchain, you’ll see that each block has a position on the chain, called a “height.” As of November 2020, the block’s height had reached 656,197 blocks so far.

After a block has been added to the end of the blockchain, it is very difficult to go back and alter the contents of the block unless the majority reached a consensus to do so. That’s because each block contains its own hash, along with the hash of the block before it, as well as the previously mentioned time stamp. Hash codes are created by a math function that turns digital information into a string of numbers and letters. If that information is edited in any way, the hash code changes as well.

Here’s why that’s important to security. Let’s say a hacker wants to alter the blockchain and steal Bitcoin from everyone else. If they were to alter their own single copy, it would no longer align with everyone else's copy. When everyone else cross-references their copies against each other, they would see this one copy stand out and that hacker's version of the chain would be cast away as illegitimate.

Succeeding with such a hack would require that the hacker simultaneously control and alter 51% of the copies of the blockchain so that their new copy becomes the majority copy and thus, the agreed-upon chain. Such an attack would also require an immense amount of money and resources as they would need to redo all of the blocks because they would now have different timestamps and hash codes.

Due to the size of Bitcoin’s network and how fast it is growing, the cost to pull off such a feat would probably be insurmountable. Not only would this be extremely expensive, but it would also likely be fruitless. Doing such a thing would not go unnoticed, as network members would see such drastic alterations to the blockchain. The network members would then fork off to a new version of the chain that has not been affected.

This would cause the attacked version of Bitcoin to plummet in value, making the attack ultimately pointless as the bad actor has control of a worthless asset. The same would occur if the bad actor were to attack the new fork of Bitcoin. It is built this way so that taking part in the network is far more economically incentivized than attacking it.

### Bitcoin vs. Blockchain <a id="mntl-sc-block_1-0-55"></a>

The goal of blockchain is to allow digital information to be recorded and distributed, but not edited. Blockchain technology was first outlined in 1991 by Stuart Haber and W. Scott Stornetta, two researchers who wanted to implement a system where document timestamps could not be tampered with. But it wasn’t until almost two decades later, with the launch of Bitcoin in January 2009, that blockchain had its first real-world application.

The Bitcoin protocol is built on a blockchain. In a research paper introducing the digital currency, Bitcoin’s pseudonymous creator, Satoshi Nakamoto, referred to it as “a new electronic cash system that’s fully peer-to-peer, with no trusted third party.”

The key thing to understand here is that Bitcoin merely uses blockchain as a means to transparently record a ledger of payments, but blockchain can, in theory, be used to immutably record any number of data points. As discussed above, this could be in the form of transactions, votes in an election, product inventories, state identifications, deeds to homes, and much more.

Currently, there is a vast variety of blockchain-based projects looking to implement blockchain in ways to help society other than just recording transactions. One good example is that of blockchain being used as a way to vote in democratic elections. The nature of blockchain’s immutability means that fraudulent voting would become far more difficult to occur.

For example, a voting system could work such that each citizen of a country would be issued a single cryptocurrency or token. Each candidate would then be given a specific wallet address, and the voters would send their token or crypto to whichever candidate's address they wish to vote for. The transparent and traceable nature of blockchain would eliminate the need for human vote counting as well as the ability of bad actors to tamper with physical ballots.

### Blockchain vs. Banks <a id="mntl-sc-block_1-0-66"></a>

Banks and decentralized blockchains are vastly different. To see how a bank differs from blockchain, let’s compare the banking system to Bitcoin’s implementation of blockchain.

### How is Blockchain Used? <a id="mntl-sc-block_1-0-71"></a>

As we now know, blocks on Bitcoin’s blockchain store data about monetary transactions. But it turns out that blockchain is actually a reliable way of storing data about other types of transactions, as well.

Some companies that have already incorporated blockchain include Walmart, Pfizer, AIG, Siemens, Unilever, and a host of others. For example, IBM has created its Food Trust blockchain1﻿ to trace the journey that food products take to get to its locations.

Why do this? The food industry has seen countless outbreaks of e Coli, salmonella, listeria, as well as hazardous materials being accidentally introduced to foods. In the past, it has taken weeks to find the source of these outbreaks or the cause of sickness from what people are eating.

Using blockchain gives brands the ability to track a food product’s route from its origin, through each stop it makes, and finally its delivery. If a food is found to be contaminated then it can be traced all the way back through each stop to its origin. Not only that, but these companies can also now see everything else it may have come in contact with, allowing the identification of the problem to occur far sooner, potentially saving lives. This is one example of blockchains in practice, but there are many other forms of blockchain implementation.

#### Banking and Finance <a id="mntl-sc-block_1-0-80"></a>

Perhaps no industry stands to benefit from integrating blockchain into its business operations more than banking. Financial institutions only operate during business hours, five days a week. That means if you try to deposit a check on Friday at 6 p.m., you will likely have to wait until Monday morning to see that money hit your account. Even if you do make your deposit during business hours, the transaction can still take one to three days to verify due to the sheer volume of transactions that banks need to settle. Blockchain, on the other hand, never sleeps.

By integrating blockchain into banks, consumers can see their transactions processed in as little as 10 minutes,2﻿ basically the time it takes to add a block to the blockchain, regardless of holidays or the time of day or week. With blockchain, banks also have the opportunity to exchange funds between institutions more quickly and securely. In the stock trading business, for example, the settlement and clearing process can take up to three days \(or longer, if trading internationally\), meaning that the money and shares are frozen for that period of time.

Given the size of the sums involved, even the few days that the money is in transit can carry significant costs and risks for banks. European bank Santander and its research partners put the potential savings at $15 billion to $20 billion a year.3﻿ Capgemini, a French consultancy, estimates that consumers could save up to $16 billion in banking and insurance fees each year4﻿ through blockchain-based applications.

#### Currency <a id="mntl-sc-block_1-0-87"></a>

Blockchain forms the bedrock for cryptocurrencies like Bitcoin. The U.S. dollar is controlled by the Federal Reserve. Under this central authority system, a user’s data and currency are technically at the whim of their bank or government. If a user’s bank is hacked, the client’s private information is at risk. If the client’s bank collapses or they live in a country with an unstable government, the value of their currency may be at risk. In 2008, some of the banks that ran out of money were bailed out partially using taxpayer money. These are the worries out of which Bitcoin was first conceived and developed.

By spreading its operations across a network of computers, blockchain allows Bitcoin and other cryptocurrencies to operate without the need for a central authority. This not only reduces risk but also eliminates many of the processing and transaction fees. It can also give those in countries with unstable currencies or financial infrastructures a more stable currency with more applications and a wider network of individuals and institutions they can do business with, both domestically and internationally.

Using cryptocurrency wallets for savings accounts or as a means of payment is especially profound for those who have no state identification. Some countries may be war-torn or have governments that lack any real infrastructure to provide identification. Citizens of such countries may not have access to savings or brokerage accounts and therefore, no way to safely store wealth.

#### Healthcare <a id="mntl-sc-block_1-0-94"></a>

Health care providers can leverage blockchain to securely store their patients’ medical records. When a medical record is generated and signed, it can be written into the blockchain, which provides patients with the proof and confidence that the record cannot be changed. These personal health records could be encoded and stored on the blockchain with a private key, so that they are only accessible by certain individuals, thereby ensuring privacy.

#### Records of Property <a id="mntl-sc-block_1-0-97"></a>

If you have ever spent time in your local Recorder’s Office, you will know that the process of recording property rights is both burdensome and inefficient. Today, a physical deed must be delivered to a government employee at the local recording office, where it is manually entered into the county’s central database and public index. In the case of a property dispute, claims to the property must be reconciled with the public index.

This process is not just costly and time-consuming—it is also riddled with human error, where each inaccuracy makes tracking property ownership less efficient. Blockchain has the potential to eliminate the need for scanning documents and tracking down physical files in a local recording office. If property ownership is stored and verified on the blockchain, owners can trust that their deed is accurate and permanently recorded.

In war-torn countries or areas that have little to no government or financial infrastructure, and certainly no “Recorder’s Office,” it can be nearly impossible to prove ownership of a property. If a group of people living in such an area is able to leverage blockchain, transparent and clear timelines of property ownership could be established.

#### Smart Contracts <a id="mntl-sc-block_1-0-104"></a>

A [smart contract](https://www.investopedia.com/terms/s/smart-contracts.asp) is a computer code that can be built into the blockchain to facilitate, verify, or negotiate a contract agreement. Smart contracts operate under a set of conditions that users agree to. When those conditions are met, the terms of the agreement are automatically carried out.

Say, for example, a potential tenant would like to lease an apartment using a smart contract. The landlord agrees to give the tenant the door code to the apartment as soon as the tenant pays the security deposit. Both the tenant and the landlord would send their respective portions of the deal to the smart contract, which would hold onto and automatically exchange the door code for the security deposit on the date the lease begins. If the landlord doesn’t supply the door code by the lease date, the smart contract refunds the security deposit. This would eliminate the fees and processes typically associated with the use of a notary, third-party mediator, or attornies.

#### Supply Chains <a id="mntl-sc-block_1-0-109"></a>

As in the IBM Food Trust example, suppliers can use blockchain to record the origins of materials that they have purchased. This would allow companies to verify the authenticity of their products, along with such common labels as “Organic,” “Local,” and “Fair Trade.”

As reported by Forbes, the [food industry is increasingly adopting the use](https://www.forbes.com/sites/samantharadocchia/2018/04/26/3-innovative-ways-blockchain-will-build-trust-in-the-food-industry/#10a5ebc42afc) of blockchain to track the path and safety of food throughout the farm-to-user journey.

#### Voting <a id="mntl-sc-block_1-0-114"></a>

As mentioned, blockchain could be used to facilitate a modern voting system. Voting with blockchain carries the potential to eliminate election fraud and boost voter turnout, as was tested in the November 2018 midterm elections in West Virginia.Using blockchain in this way would make votes nearly impossible to tamper with. The blockchain protocol would also maintain transparency in the electoral process, reducing the personnel needed to conduct an election and providing officials with nearly instant results. This would eliminate the need for recounts or any real concern that fraud might threaten the election.

### Advantages and Disadvantages of Blockchain <a id="mntl-sc-block_1-0-117"></a>

For all of its complexity, blockchain’s potential as a decentralized form of record-keeping is almost without limit. From greater user privacy and heightened security to lower processing fees and fewer errors, blockchain technology may very well see applications beyond those outlined above. But there are also some disadvantages.Pros

- Improved accuracy by removing human involvement in verification
- Cost reductions by eliminating third-party verification
- Decentralization makes it harder to tamper with
- Transactions are secure, private, and efficient
- Transparent technology
- Provides a banking alternative and way to secure personal information for citizens of countries with unstable or underdeveloped governments

Cons

- Significant technology cost associated with mining bitcoin
- Low transactions per second
- History of use in illicit activities
- Regulation

Here are the selling points of blockchain for businesses on the market today in more detail.

### Advantages of Blockchain <a id="mntl-sc-block_1-0-125"></a>

#### Accuracy of the Chain <a id="mntl-sc-block_1-0-126"></a>

Transactions on the blockchain network are approved by a network of thousands of computers. This removes almost all human involvement in the verification process, resulting in less human error and an accurate record of information. Even if a computer on the network were to make a computational mistake, the error would only be made to one copy of the blockchain. In order for that error to spread to the rest of the blockchain, it would need to be made by at least 51% of the network’s computers—a near impossibility for a large and growing network the size of Bitcoin’s.

#### Cost Reductions <a id="mntl-sc-block_1-0-129"></a>

Typically, consumers pay a bank to verify a transaction, a notary to sign a document, or a minister to perform a marriage. Blockchain eliminates the need for third-party verification and, with it, their associated costs. Business owners incur a small fee whenever they accept payments using credit cards, for example, because banks and payment processing companies have to process those transactions. Bitcoin, on the other hand, does not have a central authority and has limited transaction fees.

#### Decentralization <a id="mntl-sc-block_1-0-132"></a>

Blockchain does not store any of its information in a central location. Instead, the blockchain is copied and spread across a network of computers. Whenever a new block is added to the blockchain, every computer on the network updates its blockchain to reflect the change. By spreading that information across a network, rather than storing it in one central database, blockchain becomes more difficult to tamper with. If a copy of the blockchain fell into the hands of a hacker, only a single copy of the information, rather than the entire network, would be compromised.

#### Efficient Transactions <a id="mntl-sc-block_1-0-135"></a>

Transactions placed through a central authority can take up to a few days to settle. If you attempt to deposit a check on Friday evening, for example, you may not actually see funds in your account until Monday morning. Whereas financial institutions operate during business hours, five days a week, blockchain is working 24 hours a day, seven days a week, and 365 days a year. Transactions can be completed in as little as ten minutes and can be considered secure after just a few hours. This is particularly useful for [cross-border](https://www.investopedia.com/articles/forex/09/currency-cross-triangulation.asp) trades, which usually take much longer because of time-zone issues and the fact that all parties must confirm payment processing.

#### Private Transactions <a id="mntl-sc-block_1-0-138"></a>

Many blockchain networks operate as public databases, meaning that anyone with an internet connection can view a list of the network’s transaction history. Although users can access details about transactions, they cannot access identifying information about the users making those transactions. It is a common misperception that blockchain networks like bitcoin are anonymous, when in fact they are only confidential.

That is, when a user makes public transactions, their unique code called a [public key](https://www.investopedia.com/terms/p/public-key.asp), is recorded on the blockchain, rather than their personal information. If a person has made a Bitcoin purchase on an exchange that requires identification then the person’s identity is still linked to their blockchain address, but a transaction, even when tied to a person’s name, does not reveal any personal information.

#### Secure Transactions <a id="mntl-sc-block_1-0-143"></a>

Once a transaction is recorded, its authenticity must be verified by the blockchain network. Thousands of computers on the blockchain rush to confirm that the details of the purchase are correct. After a computer has validated the transaction, it is added to the blockchain block. Each block on the blockchain contains its own unique hash, along with the unique hash of the block before it. When the information on a block is edited in any way, that block’s hashcode changes—however, the hash code on the block after it would not. This discrepancy makes it extremely difficult for information on the blockchain to be changed without notice.

#### Transparency <a id="mntl-sc-block_1-0-146"></a>

Most blockchains are entirely open-source software. This means that anyone and everyone can view its code. This gives auditors the ability to review cryptocurrencies like Bitcoin for security. This also means that there is no real authority on who controls Bitcoin’s code or how it is edited. Because of this, anyone can suggest changes or upgrades to the system. If a majority of the network users agree that the new version of the code with the upgrade is sound and worthwhile then Bitcoin can be updated.

#### Banking the Unbanked <a id="mntl-sc-block_1-0-149"></a>

Perhaps the most profound facet of blockchain and Bitcoin is the ability for anyone, regardless of ethnicity, gender, or cultural background, to use it. According to the world bank there are nearly 2 billion adults that do not have bank accounts or any means of storing their money or wealth.5﻿ Nearly all of these individuals live in developing countries where the economy is in its infancy and entirely dependent on cash.

These people often earn little money that is paid in physical cash. They then need to store this physical cash in hidden locations in their homes or places of living leaving them subject to robbery or unnecessary violence. Keys to a bitcoin wallet can be stored on a piece of paper, a cheap cell phone, or even memorized if necessary. For most people, it is likely that these options are more easily hidden than a small pile of cash under a mattress.

Blockchains of the future are also looking for solutions to not only be a unit of account for wealth storage, but also to store medical records, property rights, and a variety of other legal contracts.

### Disadvantages of Blockchain <a id="mntl-sc-block_1-0-156"></a>

While there are significant upsides to the blockchain, there are also significant challenges to its adoption. The roadblocks to the application of blockchain technology today are not just technical. The real challenges are political and regulatory, for the most part, to say nothing of the thousands of hours \(read: money\) of custom software design and back-end programming required to integrate blockchain to current business networks. Here are some of the challenges standing in the way of widespread blockchain adoption.

#### Technology Cost <a id="mntl-sc-block_1-0-159"></a>

Although blockchain can save users money on transaction fees, the technology is far from free. The “proof of work” system that bitcoin uses to validate transactions, for example, consumes vast amounts of computational power. In the real world, the power from the millions of computers on the bitcoin network is close to [what Denmark consumes annually](https://arstechnica.com/tech-policy/2017/12/bitcoins-insane-energy-consumption-explained/). Assuming electricity costs of $0.03~$0.05 per kilowatt-hour, mining costs exclusive of hardware expenses are about $5,000~$7,000 per coin.10

Despite the costs of mining bitcoin, users continue to drive up their electricity bills in order to validate transactions on the blockchain. That’s because when miners add a block to the bitcoin blockchain, they are rewarded with enough bitcoin to make their time and energy worthwhile. When it comes to blockchains that do not use cryptocurrency, however, miners will need to be paid or otherwise incentivized to validate transactions.

Some solutions to these issues are beginning to arise. For example, bitcoin mining farms have been set up to use solar power, excess natural gas from fracking sites, or power from wind farms.

#### Speed Inefficiency <a id="mntl-sc-block_1-0-166"></a>

Bitcoin is a perfect case study for the possible inefficiencies of blockchain. Bitcoin’s “proof of work” system takes about ten minutes to add a new block to the blockchain. At that rate, it’s [estimated](https://howmuch.net/articles/crypto-transaction-speeds-compared) that the blockchain network can only manage about seven transactions per second \(TPS\). Although other cryptocurrencies such as Ethereum perform better than bitcoin, they are still limited by blockchain. Legacy brand Visa, for context, can process 24,000 TPS.

Solutions to this issue have been in development for years. There are currently blockchains that are boasting over 30,000 transactions per second.

#### Illegal Activity <a id="mntl-sc-block_1-0-171"></a>

While confidentiality on the blockchain network protects users from hacks and preserves privacy, it also allows for illegal trading and activity on the blockchain network. The most cited example of blockchain being used for illicit transactions is probably the [Silk Road](https://www.investopedia.com/terms/s/silk-road.asp), an online “dark web” drug marketplace operating from February 2011 until October 2013 when it was shut down by the FBI.6

The website allowed users to browse the website without being tracked using the Tor browser and make illegal purchases in Bitcoin or other cryptocurrencies. Current U.S. regulations require financial service providers to obtain information about their customers when they open an account, verify the identity of each customer, and confirm that customers do not appear on any list of known or suspected terrorist organizations. This system can be seen as both a pro and a con. It gives anyone access to financial accounts but also allows criminals to more easily transact. Many have argued that the good uses of crypto, like banking the unbanked world, outweigh the bad uses of cryptocurrency, especially when most illegal activity is still accomplished through untraceable cash.

#### Regulation <a id="mntl-sc-block_1-0-176"></a>

Many in the crypto space have expressed concerns about government regulation over cryptocurrencies. While it is getting increasingly difficult and near impossible to end something like Bitcoin as its decentralized network grows, governments could theoretically make it illegal to own cryptocurrencies or participate in their networks.

Over time this concern has grown smaller as large companies like PayPal begin to allow the ownership and use of cryptocurrencies on its platform.

### What's Next for Blockchain? <a id="mntl-sc-block_1-0-181"></a>

First proposed as a research project in 1991,7﻿ blockchain is comfortably settling into its late twenties. Like most millennials its age, blockchain has seen its fair share of public scrutiny over the last two decades, with businesses around the world speculating about what the technology is capable of and where it’s headed in the years to come.

With many practical applications for the technology already being implemented and explored, blockchain is finally making a name for itself at age twenty-seven, in no small part because of bitcoin and cryptocurrency. As a buzzword on the tongue of every investor in the nation, blockchain stands to make business and government operations more accurate, efficient, secure, and cheap with fewer middlemen.

As we prepare to head into the third decade of blockchain, it’s no longer a question of "if" legacy companies will catch on to the technology—it's a question of "when."SPONSOREDBitcoin is an Investment, Too.Did you know [BTC beat the 2020 returns](https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjssn8g0fN-PFxkUb7n5UajQX86GlGqRM4HIKxyMQgE0eVL4hhLzz0t5WlkfM5kpcbxpP_KCU144yiuzwAbETn5SRKItpUJsnkH7C632n0L8LsDa9A7rNhUUArfT4w6IzzIH9yb2rkyO-NEiBHRhMino5TycHN8d1-xKmPOsuxPhXXZiP5bRD6NuwEPBryFBvonZqYzXKjrU0JAwnkIeYMGe9g3JRjRa8KNOsKUVERRVD4DhLRHqrGYP2uj-10UnLDVhTBv8Pwpb8nPD5C8K0WYeRiBVD1AHNWtf_IIcdcgSQbV2fuvkzTP4PQ_Eh618uJrCcB6vbb6l3PnWIjgjtgwLMsm8FtA&sig=Cg0ArKJSzKeO2jpMni4nEAE&fbs_aeid=[gw_fbsaeid]&urlfix=1&adurl=https://ad.doubleclick.net/ddm/clk/503674036;310776828;l) of gold and the S&P 500? And there’s a slew of altcoins making similarly exciting moves in the market. You can [find them on eToro,](https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjssn8g0fN-PFxkUb7n5UajQX86GlGqRM4HIKxyMQgE0eVL4hhLzz0t5WlkfM5kpcbxpP_KCU144yiuzwAbETn5SRKItpUJsnkH7C632n0L8LsDa9A7rNhUUArfT4w6IzzIH9yb2rkyO-NEiBHRhMino5TycHN8d1-xKmPOsuxPhXXZiP5bRD6NuwEPBryFBvonZqYzXKjrU0JAwnkIeYMGe9g3JRjRa8KNOsKUVERRVD4DhLRHqrGYP2uj-10UnLDVhTBv8Pwpb8nPD5C8K0WYeRiBVD1AHNWtf_IIcdcgSQbV2fuvkzTP4PQ_Eh618uJrCcB6vbb6l3PnWIjgjtgwLMsm8FtA&sig=Cg0ArKJSzKeO2jpMni4nEAE&fbs_aeid=[gw_fbsaeid]&urlfix=1&adurl=https://ad.doubleclick.net/ddm/clk/503674036;310776828;l) the world’s leading social trading platform. For a limited time, [if you make $500 in trades, eToro will give $50!](https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjssn8g0fN-PFxkUb7n5UajQX86GlGqRM4HIKxyMQgE0eVL4hhLzz0t5WlkfM5kpcbxpP_KCU144yiuzwAbETn5SRKItpUJsnkH7C632n0L8LsDa9A7rNhUUArfT4w6IzzIH9yb2rkyO-NEiBHRhMino5TycHN8d1-xKmPOsuxPhXXZiP5bRD6NuwEPBryFBvonZqYzXKjrU0JAwnkIeYMGe9g3JRjRa8KNOsKUVERRVD4DhLRHqrGYP2uj-10UnLDVhTBv8Pwpb8nPD5C8K0WYeRiBVD1AHNWtf_IIcdcgSQbV2fuvkzTP4PQ_Eh618uJrCcB6vbb6l3PnWIjgjtgwLMsm8FtA&sig=Cg0ArKJSzKeO2jpMni4nEAE&fbs_aeid=[gw_fbsaeid]&urlfix=1&adurl=https://ad.doubleclick.net/ddm/clk/503674036;310776828;l) So, get into the crypto game and [start investing on eToro today.](https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjssn8g0fN-PFxkUb7n5UajQX86GlGqRM4HIKxyMQgE0eVL4hhLzz0t5WlkfM5kpcbxpP_KCU144yiuzwAbETn5SRKItpUJsnkH7C632n0L8LsDa9A7rNhUUArfT4w6IzzIH9yb2rkyO-NEiBHRhMino5TycHN8d1-xKmPOsuxPhXXZiP5bRD6NuwEPBryFBvonZqYzXKjrU0JAwnkIeYMGe9g3JRjRa8KNOsKUVERRVD4DhLRHqrGYP2uj-10UnLDVhTBv8Pwpb8nPD5C8K0WYeRiBVD1AHNWtf_IIcdcgSQbV2fuvkzTP4PQ_Eh618uJrCcB6vbb6l3PnWIjgjtgwLMsm8FtA&sig=Cg0ArKJSzKeO2jpMni4nEAE&fbs_aeid=[gw_fbsaeid]&urlfix=1&adurl=https://ad.doubleclick.net/ddm/clk/503674036;310776828;l)

### A New Direction for Advertising <a id="mntl-sc-block_1-0-2"></a>

One of the most notable features of blockchain as a finance application is anonymity. While this is a product of blockchain’s origins in [bitcoin](https://www.investopedia.com/terms/b/bitcoin.asp), for advertising, anonymity is sometimes counter-productive. Blockchain solutions for advertising will instead make use of the robust accountability that the technology provides, wiping the slate clean for all participants.

Blockchains built since the original \(bitcoin\) have expanded upon the importance of such transparency, and many of the most influential chains will find their killer apps in the advertising world. Companies like [Papyrus](https://papyrus.global/) exemplify this trend, with platforms that make it easy for users to know exactly who is paying to advertise to them, and where their data is coming from. With Papyrus, these users can even decide not to share any of their browsing habits or other usage data, though if they do, advertisers can pay them for it directly.

From the user side, this is preferable to the excess of ceaseless, inaccurate ads that bombard us daily. Advertisers might be put off at first, but will quickly realize that the system works in their favor as well.

This type of schema is a far cry from the current way of doing things, which sees users voluntarily surrender their most personal information with little reward. These are the “terms and conditions” that most people skip over when setting up new applications. With new, blockchain-based platforms like Papyrus and MetaX, all those with a stake in advertising will share resources, see the entire flow of information in the same place, and have an even playing field that allows for more efficient competition.

Another venture, [Bitcomo](https://ico.bitcomo.com/) – a blockchain-driven lead generation platform – is creating a smart contract-based advertising model \(pre-sale ICO kicks off on September 18\) in which payment is due once results been delivered or after generating a smart contract-triggered sale. Bitcomo offers a solution to the traditional advertising model in which publishers are at the mercy of advertisers who are not always able to pay the entire commission as a protection against leads that were not approved.

Similarly, advertisers cannot be certain they are getting their money's worth and are often forced to blacklist publishers who may be conducting fraudulent activities. \(See also: [_Investing in Cryptocurrencies: What to Keep In Mind_](https://www.investopedia.com/news/investing-cryptocurrencies-what-keep-mind/)_._\)

Kanstruktor over at [Steemit](https://steemit.com/science/@kanstruktor/bitcomo-decentralized-cpa-network-bitcomo-2017106t173838301z) explains: "Decentralized network between advertisers and publishers through caching, and logging of clicks and leads, key statistics, personalized nodes in the blockchain operator MetaHash \(fork of Ethereum – ERC20\). It is a basic principle of protection against fraud and concealment of data on actual transactions from advertisers, or making unrealistic target bots in the traffic of publishers instead of real users."

### Blockchain’s Advertising Chops <a id="mntl-sc-block_1-0-17"></a>

For online advertising, data is precious. It reveals patterns in one’s shopping and search history, comprises social media posts and leaves priceless clues behind. Blockchain distributes this data to the entire network, whereas it was once kept on secure company servers and put up for sale to bidders with a relevant interest.

Apart from functionality that gives users more control, and puts the value of their data exclusively in their hands, this decentralized system benefits ad creators as well. They will have access to immense shared pools of relevant data, already vetted by other participants and proven with the chain, making ad targeting much more accurate and much less expensive. Blockchain’s irrefutable, ledger-like system is a perfect tool in the hands of ad companies whose bread and butter are key performance indicators like clicks and likes.

Instead of paying upfront for expensive ad space targeting fishermen, for instance, the same fishing gear company can use a blockchain advertising company to target those who have expressly stated \(with their data-sharing preferences\) that they are interested in such gear. The game will no longer be based on flighty browsing habits, but on hard data. Moreover, smart contract ad buying solutions make it possible for companies to buy conditional space, which will only show an ad should the target fulfill certain parameters.

### Blockchain’s Future in Advertising <a id="mntl-sc-block_1-0-24"></a>

Online advertising companies are just now beginning to develop real use cases for blockchain in their daily activities, and those who get ahead of the curve sooner will benefit greatly. Blockchain is the ultimate democratization tool, and while those who currently protect the status quo are right to be afraid, at some point everyone will realize that an open system creates as many opportunities as it takes away.

The future is fast in coming, and instead of predicting it, the fast movers are already making it happen.

### What Is A Blockchain, Take One <a id="what-is-a-blockchain-take-one"></a>

Although the blockchain was created to support [Bitcoin](https://bitcoin.org/bitcoin.pdf), the blockchain concept can be defined regardless of the Bitcoin ecosystem. The literature usually defines a blockchain as follows:

> A blockchain is a **ledger** of **facts**, replicated across several computers assembled in a peer-to-peer network. Facts can be anything from monetary transactions to content signature. Members of the network are anonymous individuals called **nodes**. All communication inside the network takes advantage of cryptography to securely identify the sender and the receiver. When a node wants to add a fact to the ledger, a consensus forms in the network to determine where this fact should appear in the ledger; this consensus is called a **block**.

[![The Thinker, by Rodin](https://marmelab.com/images/blog/The_Thinker_Musee_Rodin.jpg)](https://commons.wikimedia.org/wiki/File:The_Thinker_Musee_Rodin.jpg)

I don't know about you, but after reading these definitions, I still had troubles figuring out what this is all about. Let's get a bit deeper.

### Ordering Facts <a id="ordering-facts"></a>

Decentralized peer-to-peer networks aren't new. Napster and BitTorrent are P2P networks. Instead of exchanging movies, members of the blockchain network exchange facts. Then what's the real deal about blockchains?

P2P networks, like other distributed systems, have to solve a very difficult computer science problem: the resolution of conflicts, or **reconciliation**. Relational databases offer **referential integrity**, but there is no such thing in distributed system. If two incompatible facts arrive at the same time, the system must have rules to determine which fact is considered valid.

> Take for instance the **double spend problem**: Alice has 10, and she sends twice 10 to Bob and Charlie. Who will have the 10$ eventually? To answer this question, the best way is to **order** the facts. If two incompatible facts arrive in the network, the first one to be recorded wins.

![double spend](https://marmelab.com/images/blog/double_spend.png)

In a P2P network, two facts sent roughly at the same time may arrive in different orders in distant nodes. Then how can the entire network agree on the first fact? To guarantee integrity over a P2P network, you need a way to make everyone agree on the ordering of facts. You need a **consensus system**.

Consensus algorithms for distributed systems are a [very active research field](https://en.wikipedia.org/wiki/Consensus_%28computer_science%29). You may have heard of Paxos or Raft algorithms. The blockchain implements another algorithm, the **proof-of-work** consensus, using blocks.

### Blocks <a id="blocks"></a>

Blocks are a smart trick to order facts in a network of non-trusted peers. The idea is simple: facts are grouped in _blocks_, and there is only a single chain of blocks, replicated in the entire network. Each block references the previous one. So if fact F is in block 21, and fact E is in block 22, then fact E is considered by the entire network to be posterior to fact F. Before being added to a block, facts are _pending_, i.e. unconfirmed.

![How blocks group facts](https://marmelab.com/images/blog/blocks_facts.png)

### Mining <a id="mining"></a>

Some nodes in the chain create a new local block with pending facts. They compete to see if their local block is going to become the next block in the chain for the entire network, by rolling dice. If a node makes a double six, then it earns the ability to publish their local block, and all facts in this block become confirmed. This block is sent to all other nodes in the network. All nodes check that the block is correct, add it to their copy of the chain, and try to build a new block with new pending facts.

![Rolling dice](https://marmelab.com/images/blog/rolling_dice.png)

But nodes don't just roll a couple dice. Blockchain challenges imply rolling a huge number of dice. Finding the random key to validate a block is **very unlikely**, by design. This prevents fraud, and makes the network safe \(unless a malicious user owns more than half of the nodes in the network\). As a consequence, new blocks gets published to the chain at a fixed time interval. In Bitcoin, blocks are published every 10 minutes on average.

> In Bitcoin, the challenge involves a double SHA-256 hash of a string made of the pending facts, the identifier of the previous block, and a random string. A node wins if their hash contains at least n leading zeroes.
>
> ```text
> // a losing hash for Bitcoin
> 787308540121f4afd2ff5179898934291105772495275df35f00cc5e44db42dd
> // a winning hash for Bitcoin if n=10
> 00000000009f766c17c736169f79cb0c65dd6e07244e9468bc60cde9538b551e
> ```
>
> Number n is adjusted every once in a while to keep block duration fixed despite variations in the number of nodes. This number is called the **difficulty**. Other blockchain implementations use special hashing techniques that discourage the usage of GPUs \(e.g. by requiring large memory transfers\).

The process of looking for blocks is called _mining_. This is because, just like gold mining, block mining brings an economical reward - some form of money. That's the reason why people who run nodes in a blockchain are also called _miners_.

**Note**: By default, a node doesn't mine - it just receives blocks mined by other nodes. It's a voluntary process to turn a node into a miner node.

### Money and Cryptocurrencies <a id="money-and-cryptocurrencies"></a>

Every second, each miner node in a blockchain tests thousands of random strings to try and form a new block. So running a miner in the blockchain pumps a huge amount of computer resources \(storage and CPU\). That's why **you must pay to store facts** in a blockchain. Reading facts, on the other hand, is free: you just need to run your own node, and you'll recuperate the entire history of facts issued by all the other nodes. So to summarize:

- Reading data is free
- Adding facts costs a small fee
- Mining a block brings in the money of all the fees of the facts included in the block

We're not talking about real money here. In fact, each blockchain has its own \(crypto-\)currency. It's called Bitcoin \(**BTC**\) in the Bitcoin network, Ether \(**ETH**\) on the Ethereum network, etc. To make a payment in the Bitcoin network, you must pay a small fee in Bitcoins - just like you would pay a fee to a bank. But then, where do the first coins come from?[![A pile of Bitcoins](https://marmelab.com/images/blog/bitcoin.jpg)](https://www.linkedin.com/pulse/20141106071134-811619-value-of-bitcoins-why-bitcoins-may-become-the-gold-of-the-21st-century-and-beyond)

Miners receive a **gratification** for keeping the network working and safe. Each time they successfully mine a block, they receive a fixed amount of cryptocurrency. In Bitcoin this gratification is 25 BTC per block, in Ethereum it's 5 ETH per block. That way, **the blockchain generates its own money**.

Lastly, cryptocurrencies rapidly became **convertible to real money**. Their facial value is only determined by offer and demand, so it's subject to speculation. At the time of writing, mining Bitcoins still costs slightly less in energy and hardware than you can earn by selling the coins you discovered in the process. That's why people add new miners every day, hoping to turn electricity into money. But fluctuations in the BTC value make it [less and less profitable](https://medium.com/@octskyward/the-resolution-of-the-bitcoin-experiment-dabb30201f7#.iyxkdruc5).[![BTC to USD](https://marmelab.com/images/blog/btc2usd.png)](http://bitcoincharts.com/charts/bitstampUSD#tgCzm1g10zm2g25)

### Contracts <a id="contracts"></a>

So far we've mostly mentioned facts storage, but a blockchain can also **execute programs**. Some blockchains allow each fact to contain a mini program. Such programs are replicated together with the facts, and every node executes them when receiving the facts. In bitcoin, this can be used to make a transaction **conditional**: Bob will receive 100 BTC from Alice if and only if today is February 29th.

Other blockchains allow for more sophisticated contracts. In Ethereum for instance, each contract carries a **mini-database**, and exposes methods to modify the data. As contracts are replicated across all nodes, so are their database. Each time a user calls a method on the contract and therefore updates the underlying data, this command is replicated and replayed by the entire network. This allows for a distributed consensus on the execution of a promise.

This idea of pre-programed conditions, interfaced with the real world, and broadcasted to everyone, is called a [**smart contract**](https://en.wikipedia.org/wiki/Smart_contract). A contract is a promise that signing parties agree to make legally-enforceable. A smart contract is the same, except with the word "technically-" instead of "legally-". This removes the need for a judge, or any authority acknowledged by both parties.[![Public hearings of the Court presided over by H.E. Judge Rosalyn Higgins (February/March 2006)](https://marmelab.com/images/blog/judges.jpg)](https://commons.wikimedia.org/wiki/File:ICJ-CJI_hearing_1.jpg)

> Imagine that you want to rent your house for a week and 1,000, with a 50% upfront payment. You and the loaner sign a contract, probably written by a lawyer. You also need a bank to receive the payment. At the beginning of the week, you ask for a5,000 deposit; the loaner writes a check for it. At the end of the week, the loaner refuses to pay the remaining 50%. You also realize that they broke a window, and that the deposit check refers to an empty account. You'll need a lawyer to help you enforce the rental contract in a court.
>
> Smart contracts in a blockchain allow you to get rid of the bank, the lawyer, and the court. Just write a program that defines how much money should be transferred in response to certain conditions:
>
> - two weeks before beginning of rental: transfer $500 from loaner to owner
> - cancellation by the owner: transfer $500 from owner to loaner
> - end of the rental period: transfer $500 from loaner to owner
> - proof of physical degradation after the rental period: transfer $5,000 from loaner to owner
>
> Upload this smart contract to the blockchain, and you're all set. At the time defined in the contract, the money transfers will occur. And if the owner can bring a predefined proof of physical degradation, they get the $5,000 automatically \(without any need for a deposit\).

You might wonder how to build a proof of physical degradation. That's where the **Internet of Things** \(IoT\) kicks in. In order to interact with the real world, blockchains need sensors and actuators. The Blockchain revolution won't happen unless the IoT revolution comes first.

Such applications relying on smart contracts are called **Decentralized Apps**, or **DApps**.

Smart contracts naturally extend to **smart property**, and a lot more smart things. The thing to remember is that "smart" means "no intermediaries", or "technically-enforced". Blockchains are a new way to disintermediate businesses - just like the Internet disintermediated music distribution.

![Disintermediation](https://marmelab.com/images/blog/disintermediation.png)

### What Is A Blockchain, Take Two <a id="what-is-a-blockchain-take-two"></a>

In my opinion, the best way to understand the blockchain is to look at it from various angles.

**What it does** A blockchain allows to securely share and/or process data between multiple parties over a network on non-trusted peers. Data can be anything, but most interesting uses concern information that currently require a trusted third-party to exchange. Examples include money \(requires a bank\), a proof or property \(requires a lawyer\), a loan certificate, etc. In essence, the blockchain removes the need for a trusted third party.

**How it works** From a technical point of view, the blockchain is an innovation relying on three concepts: peer-to-peer networks, public-key cryptography, and distributed consensus based on the resolution of a random mathematical challenge. None of there concepts are new. It's their combination that allows a breakthrough in computing. If you don't understand it all, don't worry: very few people know enough to be able to develop a blockchain on their own \(which is a problem\). But not understanding the blockchain doesn't prevent you from using it, just like you can build web apps without knowing about TCP slow start and Certificate Authorities.

**What it compares to** See the blockchain as a database replicated as many times as there are nodes and \(loosely\) synchronized, or as a supercomputer formed by the combination of the CPUs/GPUs of all its nodes. You can use this supercomputer to store and process data, just like you would with a remote API. Except you don't need to own the backend, and you can be sure the data is safe and processed properly by the network.

![It's all a matter of perspective](https://marmelab.com/images/blog/perspective.jpg)

### Practical Implications <a id="practical-implications"></a>

Facts stored in the blockchain can't be lost. They are there forever, replicated as many times as there are nodes. Even more, the blockchain doesn't simply store a final state, it stores the history of all passed states, so that everyone can check the correctness of the final state by replaying the facts from the beginning.

Facts in the blockchain can be trusted, as they are verified by a technically enforceable consensus. Even if the network contains black sheeps, you can trust its judgement as a whole.

Storing data in the blockchain isn't fast, as it requires a distributed consensus.

If you have 20 spare minutes to get a deeper understanding, watch this excellent introduction video about Bitcoin, which also explains the blockchain:

YouTube might track you and we would rather have your consent before loading this video.YES, LOAD IT.[Always allow](https://marmelab.com/blog/2016/04/28/blockchain-for-web-developers-the-theory.html#)

### Why It's a Big deal <a id="why-its-a-big-deal"></a>

> «The Blockchain is the most disruptive technology I have ever seen.» Salim Ismail
>
> «The most interesting intellectual development on the Internet in the last five years.» Julian Assange
>
> «I think the fact that within the Bitcoin universe an algorithm replaces the functions of \[the government\] ... is actually pretty cool.» Al Gore

These smart people have seen a huge potential in the blockchain. It concerns disintermediation. The blockchain can potentially replace all the intermediaries required to build trust. Let's see a few example applications, most of which are just proof-of-concepts for now:

- [Monegraph](https://monegraph.com/) lets authors claim their work, and set their rules \(and fares\) for use
- [La Zooz](http://www.lazooz.net/) is a decentralized Uber. Share your car, find a seat, without Uber taking a fee.
- [Augur](https://augur.net/) is an online bookmaker. Bet on outcomes, and get paid.
- [Storj.io](https://storj.io/) is a peer-to-peer storage system. Rent your unused disk space, or find ultra cheap online storage.
- [Muse](http://museblockchain.com/) is a distributed, open, and transparent database tailored for the music industry
- [Ripple](https://ripple.com/) enables low cost cross-border payments for banks

![Blockchain use cases](https://marmelab.com/images/blog/blockchain_infographic.png)

Many **successful businesses on the Internet today are intermediaries**. Think about Google for a minute: Google managed to become the intermediary between you and the entire Internet. Think about Amazon: they became the intermediary between sellers and buyers for any type of good. That's why a technology that allows to remove intermediaries can potentially **disrupt the entire Internet**.

Will it benefit to end users, who won't need third parties to exchange goods and services anymore? It's far from certain. Internet had the same promise of heavy disintermediation. Yet Google built the first market capitalization worldwide as an intermediary. That's why it's crucial to invest in the blockchain quickly, because the winners and losers of the next decade are being born right now.

### You Won't Build Your Own Blockchain <a id="you-wont-build-your-own-blockchain"></a>

The technology behind the blockchain uses advanced cryptography, custom network protocols, and performance optimizations. This is all too sophisticated to be redeveloped each time a project needs a blockchain. Fortunately, aside of Bitcoin, there are several open-source blockchain implementations. Here are the most advanced:

- [Ethereum](https://www.ethereum.org/): an open-source blockchain platform by the Ethereum Foundation
- [Hyperledger](https://www.hyperledger.org/): another open-source implementation, this time by the Linux Foundation. The first proposal was [published very recently](https://github.com/hyperledger/fabric).
- [Eris Industries](https://erisindustries.com/): Tools helping to manipulate Ethereum, Bitcoin or totally independent blockchains, mostly to build private networks. Their [tutorials](https://docs.erisindustries.com/tutorials/getting-started/) and [explainers](https://docs.erisindustries.com/explainers/) are a great starting point for an overview of the blockchain technology.

[![Ethereum](https://marmelab.com/images/blog/ethereum.png)](https://www.ethereum.org/)

The maturity of these implementations varies a lot. If you have to build an application now, we'd advise:

- Eris for a closed Blockchain, or to discover and play with the technology
- Ethereum for a shared Blockchain

Also, Bitcoin isn't a good choice to build an application upon. It was designed for money transactions and nothing else, although you can program pseudo-smart contracts \(but you have to love [assembly](https://en.bitcoin.it/wiki/Contract)\). The network currently [suffers a serious growth crisis](https://medium.com/@octskyward/the-resolution-of-the-Bitcoin-experiment-dabb30201f7), transactions wait in line for up to one hour to get inserted in a block. Miners often select transactions with the highest fees, so money transfers in Bitcoin become more expensive than they are in a Bank. The developer community is at war, and the speculation on the cryptocurrency makes the face value move too much.

### Numbers <a id="numbers"></a>

How big are blockchains today? Let's see some numbers.

Bitcoin:

- Block time: 10 minutes
- Number of bitcoins earned for each mined block: 25
- [Number of blocks mined](https://blockchain.info/): over 400,000
- [Number of transactions per block](https://blockchain.info/en/charts/n-transactions-per-block): over 1,200
- [Number of nodes in the network](https://bitnodes.21.co/): ~7000
- [Bitcoin value](http://www.coindesk.com/price/): $420
- [Most of the computing power is said to be concentrated in China](https://medium.com/@octskyward/the-resolution-of-the-bitcoin-experiment-dabb30201f7#.by0blzsmz)

Ethereum:

- Block time: 10 seconds
- Number of Ether earned for each mined block: 5
- [Number of blocks mined](https://ethstats.net/): more than 1,400,000
- [Number of transactions per day](https://stats.etherchain.org/dashboard/db/transactions?theme=light): over 30,000
- [Number of nodes in the network](https://www.ethernodes.org/network/1): over 6,000
- [Ether value](https://www.etherchain.org/): around $10, but it varies a lot.
- [Most of the computing power is said to be concentrated by a miner pool called "Dwarfpool"](https://www.etherchain.org/statistics/miners)

![Ethereum stats](https://marmelab.com/images/blog/ethstats.png)

### [https://ethstats.net/](https://ethstats.net/) <a id="conclusion"></a>

{% embed url="https://ethstats.net/" %}

### Conclusion <a id="conclusion"></a>

The blockchain technology is both intriguing and exciting. Could it be the revolution that gurus predict? Or is it just a speculative bubble based on an impractical idea? After reading a lot on the matter, we couldn't form a definitive opinion.

When we face uncertainty, we know a great way to lift it: trying. That's what we decided to do. [Read the next post in this series](https://marmelab.com/blog/2016/05/20/blockchain-for-web-developers-in-practice.html) to see what we've learned by **building a real world app running on the blockchain**.
